import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const LATEST_MC_VERSION = "1.21";

function compareVersions(a, b) {
    return parseFloat(a.substring(2)) - parseFloat(b.substring(2));
}

function extractLatest(promos, mcVersion, fbVersion) {
    promos = promos || {};

    if (!mcVersion) {
        const versions = Object.keys(promos)
            .filter(key => key.endsWith("-latest"))
            .map(key => key.substring(0, key.lastIndexOf('-')))
            .sort(compareVersions);
        mcVersion = versions[versions.length - 1];
    }

    return {
        mc: mcVersion,
        ver: promos[`${mcVersion}-latest`] || fbVersion || "[UNKNOWN]"
    };
}

export function getLatestMcVersion(modrinthId) {
    const [latest, setLatest] = useState();
    useEffect(() => {
        const cacheKey = `modrinth-cache-${modrinthId}`;
        let mdCache = localStorage.getItem(cacheKey);
        if (mdCache) mdCache = JSON.parse(mdCache);

        const now = Date.now() / 1000;

        if (mdCache?.promos && mdCache?.lastRefresh && now - mdCache.lastRefresh < 5 * 60) {
            const promos = mdCache.promos;
            setLatest(extractLatest(promos)?.mc || LATEST_MC_VERSION);
        } else axios.get(`https://api.modrinth.com/updates/${modrinthId}/forge_updates.json?neoforge=include`)
            .then(resp => {
                const promos = resp.data?.promos;
                localStorage.setItem(cacheKey, JSON.stringify({
                    lastRefresh: parseInt(Date.now() / 1000),
                    promos: promos
                }));
                setLatest(extractLatest(promos)?.mc || LATEST_MC_VERSION);
            })
            .catch(err => console.log(err))
    }, [modrinthId]);
    return latest;
}

export default function LatestModVersion({ children, modrinthId, mcVersion, fbVersion, versionNotation, mcNotation }) {
    const [latest, setLatest] = useState({ mc: mcVersion, ver: fbVersion });

    versionNotation = versionNotation || "%VERSION%";
    mcNotation = mcNotation || "%MCVERSION%";

    useEffect(() => {
        const cacheKey = `modrinth-cache-${modrinthId}`;
        let mdCache = localStorage.getItem(cacheKey);
        if (mdCache) mdCache = JSON.parse(mdCache);

        const now = Date.now() / 1000;

        if (mdCache?.promos && mdCache?.lastRefresh && now - mdCache.lastRefresh < 5 * 60) {
            const promos = mdCache.promos;
            setLatest(extractLatest(promos, mcVersion, fbVersion));
        } else {
            const promos = mdCache?.promos;
            if(promos) setLatest(extractLatest(promos, mcVersion, fbVersion)); // Set the cached version so we don't see the "undefined" when updating

            axios.get(`https://api.modrinth.com/updates/${modrinthId}/forge_updates.json?neoforge=include`)
                .then(resp => {
                    const promos = resp.data?.promos;
                    localStorage.setItem(cacheKey, JSON.stringify({
                        lastRefresh: parseInt(Date.now() / 1000),
                        promos: promos
                    }));
                    setLatest(extractLatest(promos, mcVersion, fbVersion));
                })
                .catch(err => console.log(err))
        }
    }, [modrinthId, mcVersion]);

    const latestVer = latest?.ver || (mcVersion ? mcVersion.substring(2) + ".1" : "0.0.0");

    if (!children) return latestVer;

    const replaceVersionInText = (text) => {
        return text.replaceAll(versionNotation, latestVer)
            .replaceAll(mcNotation, latest?.mc || LATEST_MC_VERSION);
    };

    const processChildren = (children) => {
        return React.Children.map(children, child => {
            if (typeof child === 'string') {
                return replaceVersionInText(child);
            }

            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    ...child.props,
                    children: processChildren(child.props.children),
                });
            }

            return child;
        });
    };

    return <>{processChildren(children)}</>;
}
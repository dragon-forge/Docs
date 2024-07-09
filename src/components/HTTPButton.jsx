import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function HTTPButton({ text, url }) {
    return <>
        <button className='http-button' onClick={() => {
            axios.get(url);
        }}>{text}</button>
    </>
}
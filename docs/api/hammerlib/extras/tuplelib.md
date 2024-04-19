---
sidebar_position: 0
---

# TupleLib
This is one of several libraries included in HammerLib.
Its essence lies in combining multiple objects into one. In total, 27 TupleN classes are provided, where N is the number of types contained within, ranging from [0; 26].
The TupleN themselves are immutable, and their fields are final.
All TupleN can be created through a unified class `Tuples`.

All TupleN implement the ITuple interface, which has the following methods:
- `arity` - returns the N number of elements inside the given TupleN.
- `stream` - returns a stream of all elements from left to right.

Various operations can be performed on TupleN:
- `stripNR` - "slice off" N types from the right side.
- `stripNL` - "slice off" N types from the left side.
- `add` - add N types to the end.
- `insert` - insert N types at the beginning.
- `applyR` - exchange N types on the right with the result of FunctionN.
- `applyL` - exchange N types on the left with the result of FunctionN.
- `apply` - exchange ALL types of TupleN with the result of FunctionN.
- `acceptR` - send N types on the right to ConsumerN.
- `acceptL` - send N types on the left to ConsumerN.
- `accept` - send ALL types of TupleN to ConsumerN.
- `mutable` - transform TupleN into TupleN.MutableN (TupleN.MutableN returns itself).
- `immutable` - transform TupleN.Mutable into TupleN (TupleN returns itself).
- `copy` - creates a "shallow" copy of TupleN, inheriting all values. The copy is shallow because the elements of the original TupleN are passed to the copy without deep copying, so changing them (if they are mutable) will cause the original tuple's value to change.
# TypeScript Type 'string | null' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: `Type 'string | null' is not assignable to type 'string'`.

The error arises when a function expects a string argument, but an array containing both strings and null values is iterated, and each element is passed to the function.

## Bug

The `bug.ts` file contains the problematic code.  A function `printName` expects a string, but the `forEach` loop passes elements from `names` array, which includes null values. This triggers the type error.

## Solution

The `bugSolution.ts` file provides a solution by either using type assertion or optional chaining to handle null values appropriately.

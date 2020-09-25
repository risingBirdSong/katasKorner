"use strict"
const R = require("ramda")
const repeats = R.pipe(R.sort((a,b)=>a-b),R.groupWith(R.equals), R.filter(x=>x.length == 1), R.flatten, R.sum())
console.log(repeats([1,2,2,2,4,5,6]));
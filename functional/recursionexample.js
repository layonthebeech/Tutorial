//## Arguments
//
//* arr: An Array to reduce over
//* fn: Function to use as the reduction step. Like regular Array#reduce, this function must be passed previousValue, currentValue, index and the array we're iterating over.
//* init: Initial value of the reduction. Unlike Array#reduce, this value is required (and you may assume it will always be supplied).
//*
//*## Example
//*
//*// Your reduce function should behave the same as a
//*// regular Array#reduce, but it will take the array
//*// to operate on as the first argument:
//*                     
//*reduce([1,2,3], function(prev, curr, index, arr) {
//*return prev + curr
//*}, 0)
//* => 6
//*



function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value;
    return reduceOne(index + 1, fn(value, arr[index], index, arr));
  })(0, initial);
 }
module.exports = reduce;


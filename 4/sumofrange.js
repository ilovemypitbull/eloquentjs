/*

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. 

*/

function range(start, finish, step){
  var range_array = [];
  
  step = step || 1;
  
  if (start < finish){
    for (i = start; i <= finish; i+=step){
      range_array.push(i);
    }
  } else {
    for (i = start; i >= finish; i+=step){
      range_array.push(i);
    }
  }
    return range_array;
}

function sum(numbers){
  var total = 0;
  for (i = 0; i < numbers.length; i++){
    total += numbers[i];
  }
  return total;
}
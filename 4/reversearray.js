/*
Write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
*/

function reverseArray(array){
  new_array = [];
  while (array.length > 0){
    new_array.push(array.pop());
  }
  return new_array;
}

function reverseArrayInPlace(array){
    var first_pos = 0;
    var last_pos = array.length - 1;
    var temp;
    while (first_pos < last_pos){
        temp = array[first_pos];
        array[first_pos] = array[last_pos];
        array[last_pos] = temp;
        first_pos++;
        last_pos--;
    }
}
/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
*/
var size = 8;
var temp_str = "";
for (var i = 0; i < size; i++){
    temp_str = "";
    if (i % 2 === 0){
        for (var j = 0; j < size; j++){
            if (j % 2 === 0){
                temp_str += " ";
            } else {
                temp_str += "#";
            }
        }
        console.log(temp_str);
    } else {
        for (var j = 0; j < size; j++){
            if (j % 2 === 0){
                temp_str += "#";
            } else {
                temp_str += " ";
            }
        }
        console.log(temp_str);
    }
}
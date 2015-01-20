/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var pounds = 1;
var pound_line = " ";

while (pounds < 8){
  	pound_line += "#";
    console.log(pound_line);
    pounds++;
}
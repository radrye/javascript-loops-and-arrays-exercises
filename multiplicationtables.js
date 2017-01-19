/*
Multiplication Tables

Write a for loop that will iterate from 0 to 10. 
For each iteration of the for loop, it will multiply the 
number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every 
multiplier from 1 to 10 (100 results total).
*/

// YOUR CODE GOES HERE
var multiplier = 9;
for (var i = 0; i <= 10; i++)  {
    var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}

for (var multiplier = 0; multiplier <= 10; multiplier++)  {
    for (var i = 0; i <= 10; i++) {
        var result = multiplier * i;
        console.log(multiplier + ' * ' + i + ' = ' + result);
    }
}
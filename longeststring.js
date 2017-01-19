/*

Longest String

Given an array of strings, find the longest string and print out that string.
hint: strings also have the .length property - i.e `"starburst".length` is 9

*/

// YOUR CODE GOES HERE

var strings = ["starburst", "gushers", "jellybean", "pez"];
var longestString = "";

for(var i = 0; i < strings.length; i++)  {
    var currentString = strings[i];
    if(currentString.length > longestString.length)  {
        longestString = currentString;
    }
}
console.log("The longest string is " + longestString + ". It has " + longestString.length + " letters.");

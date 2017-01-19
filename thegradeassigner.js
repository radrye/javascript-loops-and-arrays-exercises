/*
The Grade Assigner

Check the results of your assignGrade 
function from the conditionals exercise 
by logging every value from 60 to 100: 
your log should show "For 88, you got a B. 
For 89, you got a B. For 90, you got an A. 
For 91, you got an A.", etc., logging each 
grade point in the range.
*/

// YOUR CODE GOES HERE
function assignGrade(score) {
    if (score >90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var i= 80; i<= 100; i++) {
    console.log('For ' + i ', you got a ' +assignGrade(i));
}

/* 
SO I STARTED THIS OUT LIKE THIS, It's wrong I think?
for (var i = 60; i <= 100; i++) {
if (i >=60) {
   console.log('Your grade is ' + i + '. You got a D.');
} else if (i >=70) {
    console.log('Your grade is C.');
} else if (i >=80) {
    console.log('Your grade is B.');
} else if (i >=90) {
    console.log('Your grade is A.');
}
*/
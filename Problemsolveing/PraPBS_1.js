//Create a program to print the result as pass if the marks obtained is greater than or equal to 40 using ternary operator.

var resultByMark = function (mark) {
    return (mark >= 40) ? console.log("You Have Passed the test") : console.log("Sorry better luck next time");

}
resultByMark(15);
resultByMark(40.1);


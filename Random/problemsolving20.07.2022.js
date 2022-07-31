/*1.Create a program which gives output for children to 
go out in park if the temperature is bw 20 degrees Celsius 
-25 degrees C and if its not raining outside, ask them to 
be in play school if temperature is bw 18 degree C to 20 degree 
C and raining otherwise, they should not step out of the home.*/


//i. Method One//
var NR = "Not Raining"
var R = "Raining"

var temper = function (x, y) {
    if (x >= -25 && x <= 25 && y == NR) {
        console.log
            ("Since the temp is", x, "and its", y,
                "Child can go to park")
    }
    else if (x >= 18 && x <= 20 && y == R) {
        console.log("Since the temp is", x,
            "and its", y, "Child cannot go to park")
    }
    else {
        console.log("Dont step ouside the House")
    }
}
temper(15, NR)
temper(-1, NR)

//ii. Method Two

function canDotopark(temp, isRaining) {
    if (temp >= -25 && temp <= 25, !isRaining) {
        console.log
            ("Since the temp is", temp, "and its", isRaining,
                "Child can go to park")
    }
    else if (temp >= 18 && temp <= 20 && isRaining) {
        console.log("Since the temp is", temp,
            "and its", isRaining, "Child cannot go to park")
    }
    else {
        console.log("Dont step ouside the House")
    }
}
canDotopark(25, false);
canDotopark(20, true);




/*2.Create a program to find if the number is 
positive, negative or zero*/

function findNumtype(num) {
    if (num == 0) {
        console.log(num, " is zero");
    }
    else if (num < 0) {
        console.log(num, " is a Negative number")
    }
    else if (num > 0) {
        console.log(num, " is positive number")
    }
    else {
        console.log("Pls put numbers only")
    }
}


findNumtype(-5);
findNumtype(5);
findNumtype(0);

/*3.Write a program to find the Highest common Factor */

var a = 256;
var b = 128;

/*4.Write a program to sum number from 1 to N*/

function sumNum(h) {
    var v = 0;
    for (let i = 1; i <= h; i++) {
        v = v + i;
    }
    console.log(v)
}
sumNum(5)

/*5.Print a table of given number*/

function printTable(b) {
    for (let i = 1; i <= 5; i++) {
        let g = b * i
        console.log(i, "x", b, "=", g)
    }
}
printTable(2)

/*6.Print a parttern * using loops */


function printStar(n) {

    for (let i = 1; i <= n; i++) {
        var d = "";
        for (j = 1; j <= i; j++) {

            d += "*"
        }
        console.log(d)
    }

}
printStar(5);
///


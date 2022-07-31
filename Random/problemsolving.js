//1.Check if age  >18 and return true

/*function ageTovote(x) {
    if (x >= 18) {
        console.log(" You are a voter ")
    }
    else {
        console.log("18 is the minimum sge for voting")
    }

}
ageTovote(25);*/


/*function ageTovote(y) {
    let z = y >= 18;
    return z

}
var output = ageTovote(15);
console.log(output)*/

//Sir why my first fuction is also retuerning boolean while i gave it function to display some message
//sir you said js will excute line by line that means even though if i use same function name it should have been displayed my first function and then go to next but why its using my
//my last function to give the first function result

//2.increasing or decreasing order

/*function orderType(a, b, c) {
    if (a > b && b > c) {
        console.log("Decreasing Order")

    }
    else if (a < b && b < c) {
        console.log("Incresing Order")

    }
    else {
        console.log("Neither increaseing nor decereasing")
    }
}
orderType(12, 45, 87)*/

//3.Largest Number

/*function largestNum(a, b, c) {
    if (a > b && a > c) {
        console.log(a, "is the Largest Number")
    }
    else if (b > a && b > c) {
        console.log(b, " is the Largest Number")
    }
    else {
        console.log(c, "is the Largest Number")
    }
}
largestNum(25, 15, 20);

function smallestNum(a, b, c) {
    if (a < b && a < c) {
        console.log(a, "is the Smallest Number")
    }
    else if (b < a && b < c) {
        console.log(b, " is the Smallest Number")
    }
    else {
        console.log(c, "is the Smallest Number")
    }
}
smallestNum(25, 20, 15);*/


//Grading System

function gradeByscore(z) {
    if (z >= 90 && z <= 100) {
        console.log("A")
    }
    else if (z >= 80 && z <= 89) {
        console.log("B")
    }
    else if (z >= 60 && z <= 79) {
        console.log("C")
    }
    else if (z >= 33 && z <= 59) {
        console.log("D")
    }
    else if (z < 33 && z >= 0) {
        console.log("F")
    }

    else {
        console.log("Pls input the correct score")
    }

}
gradeByscore(10);
gradeByscore(20);
gradeByscore(30);
gradeByscore(40);
gradeByscore(50);
gradeByscore(60);
gradeByscore(70);
gradeByscore(80);
gradeByscore(90);
gradeByscore(110);
gradeByscore(-110);

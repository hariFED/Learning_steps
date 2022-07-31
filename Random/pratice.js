/*// var a = 10;
// let a = 50;

// console.log(a)

let c = 10;
console.log(c)
var d = ++c;

console.log(c);// its showing 11
console.log(d);// its showing 10
// why c showing 11 before its called by d


// let day = 10;

// switch (day) {
//     case 0: {
//         console.log("sunday");
//         break;
//     }

//     case 1:
//         {
//             console.log("monday");
//             break;
//         }

//     case 2:
//         {
//             console.log("tuesday");
//             break;
//         }
//     case 3:
//         {
//             console.log("wednesday");
//             break;
//         }
//     case 4:
//         {
//             console.log("thursday");
//             break;
//         }
//     case 5:
//         {
//             console.log("friday");
//             break;
//         }

//     case 6:
//         {
//             console.log("saturday");
//             break
//         }
//     case 7:
//         {
//             console.log("sunday");
//             break;
//         }
//     default:
//         {
//             console.log("invalide day");
//             break;
//         }
// }



// a = 5
// b = 15
// while (b > a) {
//     //5*(15-5)
//     console.log(a * (b - a));

//     while (a > b) {
//         a += 1
//         b = 1
//     }
// }
// i = 0
// d = i++
// console.log(d)
// console

var name = "Rick";
function printName() {
    var name = "Morty"
    console.log(name);
}
printName();




*/







//without tearnary oprater
// function IsOddorEven(num) {
//     if (num % 2 == 0) {
//         return "Even"
//     }
//     else {
//         return "odd"
//     }
// }
// IsOddorEven(15);

//Using ternary Opertor

function IsOddorEven(num) {
    var f = num % 2 == 0 ? "Even" : "Odd"
    console.log(f)
}
IsOddorEven(50)

function largestNum(a, b, c) {
    let z = a > b && a > c ? [a, " a is the Largest"] :
        b > a && b > c ? (b, " b is the Largest") :
            (c, "c is the largest")
    console.log(z)
}

largestNum(1, 5, 8)
largestNum(9, 7, 2)
largestNum(15, 4, 1)


//how to store collection of data and how to acess the single data from the collection data

//var arr = [10, 20, 30, 40, 50];
//console.log(arr);



function reverseString(str) {
    var output = "";
    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }
    var t = output === str ? console.log(str, "is a palindrome") : console.log("Not a palindrome")

}

reverseString("MalayalaM")
reverseString("THNEI")
reverseString("soos")



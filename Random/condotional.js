// Conditional Statements



// function IsPositiveOrNegative(num) {
//     if (num >= 0) {
//         console.log(" This is a positive Number")
//     }
//     else if (num <= 0) {
//         console.log("This is a negative number")
//     }
//     else {
//         console.log("Please input numbers only")
//     }
// }

// IsPositiveOrNegative(1);
// IsPositiveOrNegative(-2);
// IsPositiveOrNegative("kdk");


function checkTime(time) {
    if (time < 4 && time > 22) {
        console.log(" This is night")
    }

    else if (time >= 4 && time <= 12) {
        console.log(" This is Morning")
    }
    else if (time > 12 && time <= 16) {
        console.log(" This is afternoon")
    }
    else if (time > 16 && time <= 22) {
        console.log(" This is evening")
    }
    else {
        console.log("Plese go to your school study some basic english and come to our website")
    }
}


checkTime(2);
checkTime(10);
checkTime(15);
checkTime(20);
checkTime("sdf");




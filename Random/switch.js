// Switch Statement is a collection of cases and its a single value decisions can be doned
//without "break" switch contionus to function
//"Break" used to stop the swtich function when the cases acquired the result
//"default:{}"is used to represent else nature

function printResults(grade) {
    //A+ A B C
    switch (grade) {
        case "A+": {
            console.log("Distinction");
            break

        }
        case "A": {
            console.log("First class");
            break
        }
        case "B": {
            console.log(" Passed")
            break
        }
        case "C": {
            console.log("Failed Please try again later");
            break
        }
        default: {
            console.log("Please Select the value `A+' `A` `B` and `C`")
        }
    }
}



printResults("A+");
printResults("A");
printResults("B");
printResults("C");
printResults("D");

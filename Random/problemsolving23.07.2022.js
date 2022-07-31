
//1.Get Sum of Inner digits in acollectio nof number
function getSumofInnerDigits(num) {
    var numStr = num.toString()
    if (numStr.length < 3) {
        console.log(-1)
        return
    }

    let sum = 0;
    for (let i = 1; i <= numStr.length - 2; i++) {
        sum += Number(numStr[i]);
    }
    console.log(sum)
}

getSumofInnerDigits(1254789664124);
getSumofInnerDigits(12);
getSumofInnerDigits(132);
getSumofInnerDigits(1234);

//2. Given Two Numbers A and B You are supposed to find A to power of B 

function getThepower(a, b) {
    var x = a ** b
    console.log(x)
}
getThepower(10, 2);

//Other method without using operater

function getPower(digit, pow) {
    let i = 1;
    let result = 1;
    while (i <= pow) {
        result = result * digit;
        i++;
    }
    console.log(digit)

}

getPower(2, 5);

//3.Fibonacci series: Given the value of n find out the nth term of the fabonacci series

function findNthnum(f) {
    //var newNum = 0;
    if (f < 1) return -1;
    if (f == 1) return 0;
    if (f == 2) return 2;


    let collec = [0, 1]
    let i = 2;
    while (i <= f - 1) {
        let newNum = collec[i - 1] + collec[i - 2];
        collec.push(newNum);
        i++
    }
    console.log(collec[i - 1])
}

findNthnum(10)

//.4.60 a Factor 
//given a number A your are supposed to take the digits if that number and find the permutation such that 60 becomes a factor.

//5.Sum of Prime
// Given a number A which is even integer you need to print two prime numbes whoes equal to A

function primeNumber(a) {
    for (let i = 2; i <= a; i++) {
        if (i % a == 0) {
            return false
        }
    }
    console.log("its prime")
    return true

}
primeNumber(2)







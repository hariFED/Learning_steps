//Write a program to find the HCF or GCD of two integers

//example:-16, 8
// commom factor 2,4,8.so 8 is the highest common factor

function highestCommonFac(x, y) {
    let HCF = ""
    for (let i = 1; i <= x && i <= y; i++) {                      // we use one because if we use 0 then in muliplyication and division it will result 0 
        if (x % i == 0 && y % i == 0) {

            HCF = i
        }

    }
    console.log(HCF)                                                       // i <=x && i <= y , because comman factor is will be inside the both valuse it will not be beyond that for example if we just keep one vale that is  i<=x and x value is 8it will diaply upto 8 alone but we need to find for both values so we use are using both the range   
}

highestCommonFac(16, 8);

var newYear2022 = (function (y) { return y * y; }(2022));
newYear2022(2)
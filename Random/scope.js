function addTwo() {
    {
        var c = "good";
        let d = "too good";
    }
    console.log(c)      // it shows  the string (var is a function scope)
    console.log(d)      //it will show undefined (let is block scope)
}

addTwo();

function scope() {

}




// How to create a local server?
console.log("Happy Day")
const http = require("http");//importing the http library

http.createServer((req, res) => {
    //we are ending response  and returning it to client
    res.end("IS PERMENENT",);
    console.log("No Day");
}).listen(5832);
console.log("Great Day");

let z = 10 + 20 + "10" + 10 + 20
console.log(typeof z);



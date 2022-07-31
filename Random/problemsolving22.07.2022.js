/*A man reaches his office y min late when he travels at x km/hr.
if he travels at x+2 km/hr then he reaches the office y-10 min early. Find
the distance between his home and office given the value of x and y.*/

// distance = time * speed --> formula

// distance =?
// time =?

// so now we have to 



//2.how many bircks need for constructing a wall of 
//length L meter, Hight is h meter and thickness t meter
// if 15% of  wall is filled with mortar and 
//the dimension of 1 brick is 24x12x8 cm


var Totalheight = 100;
var c = 15;
var brickarea = (Totalheight - c) / 100

/*var length = L;
var height = H;
var tickness = T;*/

var bob_build = function (L, H, T) {
    var numberBricks = ((brickarea) * (L * H * T) * (100 * 100 * 100)) / (24 * 12 * 8);
    console.log(Math.ceil(numberBricks));
}
bob_build(24, 8, 0.6);
//OOP's Problem Solving session 25.07.2022

var countNum = 0;

class functionApp {

    constructor(name, Age) {
        this.name = name;
        this.Age = Age;
        countNum++;
    }

    numberOfObjects() {
        console.log(countNum)
    }

    someLogic() {
        console.log("This is someLogic called by sameLogic")
    }

    sameLogic() {
        this.someLogic();
    }

}

const obj1 = new functionApp("Hari", "22");
const obj2 = new functionApp("irah", "22");
const obj3 = new functionApp("sirh", "22");

obj1.numberOfObjects();
obj2.someLogic();
obj3.sameLogic();
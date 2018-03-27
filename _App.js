export class Character {
    constructor(name, favColor) {
        this.name = name;
        this.favColor = favColor;
    }
    
    greet() {
        console.log("Hi, my name is " + this.name + " and my favorite color is " + this.favColor + ".");
    }
}

var john = new Character("Doug Funny", "blue");
var jane = new Character("Patty Mayonaise", "green");

john.greet();
jane.greet();
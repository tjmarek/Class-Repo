var DigitalPal = function() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;


    this.feed = function() {
        if(this.hungry === true) {
            console.log("Yummy food");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("not hungry, full");
        }
    }

    this.play = function() {
        if(this.bored === true) {
            console.log("Yay! lets play");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("not now. maybe later?");
        }
    }

    this.sleep = function() {
        if(this.sleepy === true) {
            console.log("zzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("not tired!");
        }
    }

    this.increaseAge = function() {
        this.age++;
        console.log("Happy bday to me! I am " + this.age + " year old!");
    }
}



var dog = new DigitalPal();
dog.play();
dog.feed();
dog.sleep();

dog.outside = false;
dog.bark = function() {
    console.log("Woof!");
}
dog.letOutside = function() { 
    if(this.outside === false) {
        console.log("Yay! Outside!!");
        this.outside = true;
        this.bark();
    } else {
        console.log("I'm already outside!");
    }
}
dog.letInside = function() {
    if(this.outside === true) {
        console.log("I don't want to... but ok");
        this.outside = false;
    } else {
        console.log("I'm already inside!");
    }
}

dog.letOutside();
dog.letInside();

var cat = new DigitalPal();
cat.sleep();

cat.houseQuality = 100;
cat.meow = function() {
    console.log("Meow!");
}

cat.destroyFurniture = function() {
    if(this.houseQuality > 0) {
        this.houseQuality -= 10;
        this.bored = false;
        this.sleepy = true;
        cat.meow();
        console.log("Destroying house hahaha");
    } else {
        console.log("Haha the house is destroyed, $$$");
    }
}
cat.buyNewFurniture = function() {
    this.houseQuality += 50;
    console.log("Bought stuff... $$$");
}

cat.destroyFurniture();
cat.buyNewFurniture();

var animals = [ "cat" = cat, "dog" = dog ];

var animal = process.argv[2];
var method = process.argv[3];

animals[animal][method];
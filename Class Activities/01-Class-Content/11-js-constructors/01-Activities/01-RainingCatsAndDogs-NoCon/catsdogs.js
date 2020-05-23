
// Make a dog that "barks" and has raining=true
// Make a cat that "meows" and has raining=false
// both can makeNoise

// make both make noise
// bonus: check if raining == true for both, if so "DOGS AND CATS LIVING TOGETHER! Mass Hysteria!" (console.log)

var websiteDetails = {
    url: "www.philswebsite.com",
    security: "https",
    adminPage: "/admin"
}


var cat = {
    noise: "Meow!",
    raining: false,
    makeNoise: function() {
        console.log(this.noise);
    }
}

cat.newFunction = function() {
    console.log("Hello");
}

dog.makeNoise();
cat.makeNoise();

cat.raining = true;

if(dog.raining === true && cat.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
}
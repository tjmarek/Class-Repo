// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties


function Animal(_animalType, _raining, _noise, _birthDate = Date.now) {
  this.type = _animalType;
  this.raining = _raining;
  this.noise = _noise;
  this.birthDate = _birthDate;
  this.makeNoise = function() {
    console.log(this.noise);
  }
}

var dog = new Animal();
var cat = new Animal("cat", false, "Meow...", Date.parse("1995"));
var parrot = new Animal("parrot", true, "Who drank my beer!");

console.log(Object.keys(dog));

var animalArray = [ dog, cat, parrot ];
/*
for(var i = 0; i < 5000; i++) {
  var animal = new Animal("animal_"+i, true, "i_am_a_robot_"+i)
  animalArray.push(animal);
}*/


/*for(var n = 0; n < animalArray.length; n++) {
  animalArray[n].makeNoise();
}*/
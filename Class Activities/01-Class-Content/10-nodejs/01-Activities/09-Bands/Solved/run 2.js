// Gets the myBands object from the bands file.
var bandList = require("./bands.js");
var bandList2 = require("./bands2.js");

// Loop through band list and print out details
for (var key in bandList2) {

  console.log("A " + key + " band is " + bandList["classic"] + ".");
}



for(var i = 0; i < bandList.length; i++) {
  console.log(bandList[i]);
}
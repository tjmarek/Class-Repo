// Core node package for reading and writing files
var fs = require("fs");

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.writeFile("../12-ReadFile/movies.txt", "Inception, Die Hard, Spiderman, Aquaman, Captain Marvel", function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    console.log(err);

     fs.writeFile("./errors.txt", err, function(err2) {
        if(err2) {
          console.log(err2);
          return;
        }

        console.log("Successfully wrote error to errors.txt!");
      });

      return;
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("movies.txt was updated!");

});

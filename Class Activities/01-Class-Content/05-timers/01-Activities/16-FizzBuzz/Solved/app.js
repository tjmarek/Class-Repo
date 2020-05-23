// FizzBuzz Solution

// =================

function primeChecker(number) {

  // Check to see if number is prime

  return true; // or false
}

for(var i = 0; i <= 100; i++) {

  if(primeChecker(i) === true) {
    console.log("Number is prime");
  } else {
    console.log(i);
  }
}

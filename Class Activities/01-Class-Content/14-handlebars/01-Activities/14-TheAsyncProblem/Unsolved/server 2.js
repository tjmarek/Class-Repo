var orm = require("./config/orm.js");



var data = orm.selectWhere("parties", "party_type", "grown-up", function(data) {
    console.log(data);
}
);
// callback example

// Defining the function
function aNewFunction(anotherFunction) {
    console.log("Something");
    anotherFunction("Hello World");
}

// Making a callback using the above defined function + the Callback Function I want to run when its done
aNewFunction(function("Hello World") {
    console.log("Hello World");
})
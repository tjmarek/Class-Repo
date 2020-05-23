var Utility = require("./utilityCode/utility");
var _utility = new Utility("Logger");
var _utility2 = new Utility("AnotherLogger");

var commands = process.argv.splice(2, process.argv.length-1).join(",");

_utility.logCommand(commands);

var content = Date.now();
var fileName = "./logs/secondLog.txt";
var confirmWrite = function() {
    console.log("Confirming write to " + fileName);
    console.log("File Contents: " + content);
    _utility.deleteFile("./logs/secondLog.txt");
}

_utility.createFile(fileName, content, confirmWrite)

var fs = require("fs");

var messageObject = {
    newMessage: function(message) {
        if(message.length > 0) {
            fs.appendFile("../logs/log.txt", message, function() {
                console.log("Logged command: " + message);
            });
        } else {
            console.log("No commands to log");
        }
    }
}

module.exports = messageObject;
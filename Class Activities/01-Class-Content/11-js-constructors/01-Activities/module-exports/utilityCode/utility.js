var message = require("./message");
var fileUtility = require("./fileUtility");

var Utility = function(_myName) {
    this.myName = _myName;

    this.logCommand = function(cmd) {
        message.newMessage(cmd);
    }

    this.deleteFile = function(file) {
        fileUtility.deleteFile(file);
    }

    this.createFile = function(fileName, data, callback) {
        fileUtility.createFile(fileName, data, callback);
    }

}

module.exports = Utility;
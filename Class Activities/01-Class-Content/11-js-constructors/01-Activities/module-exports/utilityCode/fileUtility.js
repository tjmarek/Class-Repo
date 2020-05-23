var fs = require("fs");

var fileUtility = {
    deleteFile: function(file) {
        try {
            fs.unlink(file, function(error) {
                console.log("Deleted file: " + file);
            });
        } catch(e) {
            console.log("Caught error: " + e);
        }
    },
    createFile: function(fileName, data, callback) {
        fs.writeFile(fileName, data, function() {
            try {
                callback();
            } catch(e) {
                console.log("Caught Error: Running function failed.");
            }
        });
    }
}

module.exports = fileUtility;
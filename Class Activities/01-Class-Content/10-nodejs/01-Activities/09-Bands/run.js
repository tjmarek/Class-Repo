var input = process.argv[2];

var obj = {
    punk: 'Green Day',
    rap: 'Run DMC',
    classic: 'Led Zeppelin'
};
var checkOutput = false;
for(key in obj) {
    if(key == input) {
        checkOutput = true;
    }
}


for(key in obj) {
    var genre = key;
    var bandName = obj[key];

    if(genre == input) {
        console.log("A " + genre + " band is " + bandName + ".");
    }
}

if(checkOutput == false) {
    for(key in obj) {
        var genre = key;
        var bandName = obj[key];
        console.log("A " + genre + " band is " + bandName + ".");
    }
}


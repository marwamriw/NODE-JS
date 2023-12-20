
const fs = require ('fs')

// create a file 
fs.writeFile('welcome.txt','HELLO NODE',(err) =>{
    if (err) {
        return console.error(err);
        }
        console.log("Data written successfully!");
        //read a file
        fs.readFile('welcome.txt',(err,data) =>{
        if (err) {
            return console.error(err);
        }
            console.log("Content file read: " + data.toString());
    })
});
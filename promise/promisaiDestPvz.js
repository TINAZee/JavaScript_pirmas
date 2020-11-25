const fs = require("fs");
 
const readFile = fileName => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
        reject(err);
            return;
        }
        resolve(data);
        });
    });
};
 
const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
        if (err) {
            reject(err);
            }
            resolve();
        });
    });
};
 
let data = "";
let finalData = readFile("./promise/text1.txt")
 .then(data1 => {
    data += data1;
 return readFile("./promise/text2.txt");
 })
 .then(data1 => {
    data = data1 + data;
 return readFile("./promise/text3.txt");
 })
 // .then(data1 => {
 // data += data1;
 // console.log(typeof data);
 // return data;
 // })
 // .then(d => {
 // return "Labas " + d + " pasauli";
 // })
 .then(data1 => {
    data += data1;
 return writeFile("./promise/textAll.txt", data);
 })
 .then(() => {
 console.log("Knyga parasyta");
 })
 // .then(
 // null,
 // err => {
 // console.error(err);
 // }
 // )
 .catch(err => {
 console.error(err);
 });
 
finalData.then(d => {
 console.log("final");
 console.log(d);
})
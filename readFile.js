// const fs = require("fs");

// function pasisveikinimai(err, data) {
//     if (err) {
//         console.log('tavo problema: ' + err);
//         return;
//     } 
//     console.log('Sveikinamės taip: ' + data);
// };


// fs.readFile('./text.txt', pasisveikinimai)
// fs.readFile('./textOne.txt', pasisveikinimai) 
// fs.readFile('./textTwo.txt', pasisveikinimai) 


// console.log('pabaiga');



// const fs = require("fs");

// function pasisveikinimai(err, data) {
//     if (err) {
//         console.log('tavo problema: ' + err);
//         return;
//     } 
//     console.log('Sveikinamės taip: ' + data);
// };

// let files = [
//     'text.txt',
//     'textOne.txt',
//     'textTwo.txt'
//   ]

// for (let i = 0; i <= files.length - 1; i++){
// fs.readFile(files[i], pasisveikinimai) 
// }


// console.log('pabaiga');

const fs = require("fs");

function pasisveikinimai(err, data) {
    if (err) {
        console.log('tavo problema: ' + err);
        return;
    } 
    console.log('Sveikinamės taip: ' + data);
};

let files = [
    'text.txt',
    'textOne.txt',
    'textTwo.txt'
  ]

function x() { 
 for (let i = 0; i <= files.length - 1; i++) {
 fs.readFile(files[i], pasisveikinimai, function (err, data){
    fs.writeFile('writeMe.txt', data, (err) => {
        if (err) throw err;
        console.log('It is saved!');
       });
 });
    }
}

// fs.writeFile('message.txt', x(), function (err) {
//     console.log('The file has been saved!');
//   });


console.log('pabaiga');
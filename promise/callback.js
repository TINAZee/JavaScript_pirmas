// function executor(callback) {
//     console.log('cia as programuoju');
//     if (Math.random() < 0.3){
//         callback(false);
//     } else {
//         callback(true);
//     } 
// }

// function alius(isFinished) {
//     if (isFinished) {
//         console.log('einam alaus');
//     } else {
//         console.log('pailsek, pabaigsi rytoj');
//     }
// };

// executor(alius);
const fs = require("fs");

function executor(callback) {
    console.log('cia as programuoju');
    if (Math.random() < 0.3){
        callback("uzstrigau");
    } else {
        callback(null, 'va, mano programa');
    } 
}

function alius(err, data) {
    if (err) {
        console.log('tavo problema: ' + err);
        return;
    } 
    console.log('as panaudosiu tavo programa: ' + data);
    console.log('einam alaus');
};

//executor(alius);
fs.readFile('./tekstas.txt', alius);
console.log('pabaiga');
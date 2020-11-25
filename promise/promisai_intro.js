const { Resolver } = require("dns");

const p = new Promise(
    (resolve, reject) => {
        console.log("darom prosima");
        if (Math.random() < 0.7) {
            resolve('paskaiciavimu rezultatas')
        } else {
            reject('rezultato neraaaaaa');
        }
    }
);

console.log('cia tarrrrpas');
p.then(
    data => {
     console.log(data);
    },
    err => {
     console.log('klaiiiida ' + err);
   }
);
console.log('pabaiga');
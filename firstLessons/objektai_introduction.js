let p = {
    turis: 0,
    spalva: "rudas",
    kiekis: 0
};

let p1 = {
    turis: 0,
    spalva: "rudas",
    kiekis: 0
};

let p2 = p;

p.kiekis = 150;

p2.temp = 60;

console.log(p["turis"]);

p.kiekis = 150;
console.log(p.kiekis);
console.log(p.temp);
console.log(p1.kiekis);
console.log(p2.kiekis);
console.log(p2.temp);
console.log(p1.temp);
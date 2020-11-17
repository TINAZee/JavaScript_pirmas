function Puodukas(turis, spalva) {
    this.turis = turis;
    this.kiekis = 0;
    this._spalva = spalva ? spalva : "baltas";

    Object.defineProperty(this, 'spalva', {
        enumerable: true,
        get() {
            return this._spalva;
        },
        set(spalva) {
            if (spalva === "juodas") {
                return;
            }
            this._spalva = spalva;
        }
    });
}


Puodukas.prototype.iplik = function(kiek) {
    if (kiek < 0) {
        return;
    }
    this.kiekis += kiek;
    if (this.kiekis > this.turis){
        this.kiekis = this.turis;
    }
};
Puodukas.prototype.isgerk = function(kiek) {
    if (kiek < 0) {
        return;
    }
    this.kiekis -= kiek;
    if (this.kiekis < 0){
        this.kiekis = 0;
    }
};

class Termosas extends Puodukas {

    constructor (turis, spalva) {
        super(turis, spalva);
        this.temp = 20;
    }

    iplik (kiek) {
        if (kiek < 0) {
            return;
        }
        this.kiekis += kiek;
        if (this.kiekis > this.turis){
            this.kiekis = this.turis;
        }
        if(this.temp >20){
            this.temp -= 5;
        }
    }
}

//cia apacioje senas aprasymas, visuje naujas -------->
// //savybiu o ne funciju paveldejimas
// function Termosas(turis, spalva) {
//     Puodukas.apply(this,arguments);
//     this.temp = 20;
// }

// //ir funkciju paveldejimas
// Termosas.prototype = Object.create(Puodukas.prototype);
// Termosas.prototype.constructor = Termosas;

const t = new Termosas(1000, 'raudonas')
t.temp =
console.log(t);

//tik padarius paveldejima galima termosui naudoti puodelio funkcijas
t.iplik(100);
console.log(t);

// const p = new Puodukas(350, "zalias");
// console.log(p);
// p.iplik(150);
// console.log(p);
// console.log(p.spalva);
// p.spalva = "juodas";
// console.log(p.spalva);
// p.spalva = "rudas";
// console.log(p.spalva);


//delete istrina kintamaji is kontruktroriaus
//pvz apacioje ipilk funcija nebeveiks, nes istrintas turis
// delete p.turis;
//  p.iplik(500);
//  console.log();
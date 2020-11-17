class Car {

    constructor(nr, max) {
        this.nr = nr;
        this.max = max;
        this.greitis = 0;
        this.kelias = 0;
    }
}

Car.prototype.vaziuojam = function() {
    this.kelias += this.greitis;
}

Car.prototype.stabdis = function(kiek) {
    this.greitis -= kiek;
    if (this.greitis < 0) {
        this.greitis = 0;
    }
}

Car.prototype.gazas = function(kiek) {
    this.greitis += kiek;
    if (this.greitis > this.max) {
        this.greitis = this.max;
    }
}

class SportCar extends Car {

    constructor(nr, max) {
        super(nr, max);
    }
}
//labai svarbu prilyginti kintamaji objeketui, nes kitaip bus irasyta i window
//pvz:
//const car = new Car ();

const race = [];

for(let i=0; i < 8; i++) {

    if (i < 2) {
        race.push(new SportCar(i+ 1, 300));
    } else {
        race.push(new Car(i+ 1, 200));
    }
}

console.log(race);

const maxLength = 1000;

while (true) {
    // greicio pakeitimas
    for (let i = 0; i < race.length; i++) {
        const change = Math.random();
        if (change < 0.1) {
            const stopping = Math.floor(Math.random() * 5) + 1;
            race[i].stabdis(stopping);
        } else if (change >= 0.6) {
            const speeding = Math.floor(Math.random() * 9) + 2;
            race[i].gazas(speeding);
        }
    }

    // vaziuojam
    let fastest = 0;
    for (let i = 0; i < race.length; i++) {
          race[i].vaziuojam();
          if (fastest < race[i].kelias) {
              fastest = race[i].kelias;
          }
      console.log(race[i]);
      }
    console.log("=============");
    // ar bent viena pabaige
    if (fastest > maxLength) {
        break;
    }
}

for (let i = 0; i < race.length - 1; i++) {
    for (let j = i + 1; j < race.length; j++) {
        let condition = false;
        if (race[i].kelias < race[j].kelias) {
            condition = true;
        } else if (race[i].kelias == race[j].kelias && race[i].greitis < race[j].greitis) {
            condition = true;
        }
        if (condition) {
            const tmp = race[i];
            race[i] = race[j];
            race[j] = tmp;
        }
    }
}
console.log("Turnyrine lentele");
for (let i = 0; i < race.length; i++) {
    console.log(race[i]);
    console.log("--");
}
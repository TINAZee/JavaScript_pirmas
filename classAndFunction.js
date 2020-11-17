class Zmogus {​​​​​
    constructor(vardas) {​​​​​
    this.vardas = vardas;
    }​​​​​
    labas() {​​​​​
    console.log("Labas, as " + this.vardas);
    }​​​​​
}​​​​​
    // function Zmogus(vardas) {​​​​​
    // this.vardas = vardas;
    // }​​​​​
    // Zmogus.prototype.labas = function() {​​​​​
    // console.log("Labas, as " + this.vardas);
    // }​​​​​
    const jonas = new Zmogus("Jonas");
    const petras = new Zmogus("Petras");
    jonas.labas();
    // petras.labas = function() {​​​​​
    // console.log("Eik tu kakot. O as vis tiek " + this.vardas);
    // }​​​​​
    petras.labas();
    jonas.labas();
// sukurti klase gyvunas, kuris turi tipa, moka judeti ir kalbeti
// sukurti suni, zuvi, kurie turi savo varda
// visi turi pajudeti ir pakalbeti
// function Gyvunas(tipas, spalva, kailis) {​​​​​
// this.tipas = tipas;
// this.spalva = spalva;
// this.kailis = kailis;
// }​​​​​
// Gyvunas.prototype.judu = function() {​​​​​
// console.log("abstrktus gyvunas juda");
// }​​​​​;
// Gyvunas.prototype.kalbu = function() {​​​​​
// if (this.tipas === "fish") {​​​​​
// console.log("...");
// }​​​​​ else {​​​​​
// console.log("Mano vardas: " + this.vardas);
// }​​​​​
// }​​​​​
// function Suo(vardas) {​​​​​
// Gyvunas.apply(this, ["zinduolis", undefined, "Vidutinis"]);
// this.tipas = "Keturkojis";
// this.vardas = vardas;
// }​​​​​
// Suo.prototype = Object.create(Gyvunas.prototype);
// Suo.prototype.constructor = Suo;
// Suo.prototype.judu = function() {​​​​​
// console.log(this.vardas + " bega");
// }​​​​​
// function Zuvis(vardas) {​​​​​
// Gyvunas.apply(this, ["fish"]);
// this.vardas = vardas;
// }​​​​​
// Zuvis.prototype = Object.create(Gyvunas.prototype);
// Zuvis.prototype.constructor = Zuvis;
// Zuvis.prototype.judu = function() {​​​​​
// console.log(this.vardas + " plaukia");
// }​​​​​
class Gyvunas {​​​​​
    constructor(tipas) {​​​​​
    this.tipas = tipas;
    }​​​​​
    judu() {​​​​​
    console.log("abstrktus gyvunas juda");
    }​​​​​
    kalbu() {​​​​​
    if (this.tipas === "fish") {​​​​​
    console.log("...");
    }​​​​​ else {​​​​​
    console.log("Mano vardas: " + this.vardas);
    }​​​​​
    }​​​​​
    }​​​​​
    class Suo extends Gyvunas {​​​​​
    constructor(vardas) {​​​​​
    super("zinduolis");
    this.vardas = vardas;
    }​​​​​
    judu() {​​​​​
    console.log(this.vardas + " bega");
    }​​​​​
    }​​​​​
    class Zuvis extends Gyvunas {​​​​​
    constructor(vardas) {​​​​​
    super("fish");
    this.vardas = vardas;
    }​​​​​
    judu() {​​​​​
    console.log(this.vardas + " plaukia");
    }​​​​​
    }​​​​​
    const suo = new Suo("Lordis");
    console.log(suo);
    suo.judu();
    suo.kalbu();
    const zuvis = new Zuvis("auksine");
    console.log(zuvis);
    zuvis.judu();
    zuvis.kalbu();
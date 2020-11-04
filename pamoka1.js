console.log("Hello World !!!");

//kvadratines lygties paskaiciavimo  programa

var a = 0;
var b = 0;
var c = 0;

if (a !== 0) {
    var d = b * b - 4 * a * c;
    if (d < 0) {
        console.log("lygtis saknu neturi");
    } else if (d === 0) {
        console.log("vienas sprendinys", b / (2 * a));
    } else {
        var x1 = (b - Math.sqrt(b * b- 4 * a *c))/(2 * a);
        var x2 = (b + Math.sqrt(b * b- 4 * a *c))/(2 * a);
        console.log(x1);
        console.log(x2);
    }

} else {
    console.log("ne kvadratine lygtis");
}

//ax2 + bx + c = 0;
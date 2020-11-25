const p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let winner = -1;

while (winner < 0) {

    for (let i = 0; i < p.length; i++) {
        
        p[i] += Math.random();
        console.log(p[i]);
        if (p[i] >= 10 ) {
            if (winner < 0 || p[winner] < p[i]) {
                winner = i;
            }
        } 
    }
    console.log("-------------------");
}
console.log("winner is:", winner);
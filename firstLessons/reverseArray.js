const m = [4, 8, 3, 7, 1];

const r = [];

for(let i = 0; i <= m.length; i++){
        const line = new Array(m.length);
        line.fill(0);
        r.push(line);
}

for(let i = 0; i <= m.length; i++){
        for(let j = 0; j <= m.length; j++){
                r[i][j] = m[(i+j) % m.length];
                //move to other side
                //r[i][(i + j) % m.length] = m[j];
        }
}

console.log(r);
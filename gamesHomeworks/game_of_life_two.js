const cycleCount = 50;
// let field = [
//     [".", ".", ".", "."],
//     [".", "X", ".", "X"],
//     [".", "X", "X", "."],
//     [".", ".", ".", "."]
// ];

const size = 10;
let field = [];
for (let i = 0; i < size; i++) {
    const line = [];
    for (let j = 0; j < size; j++) {
        if (Math.random() < 0.25) {
            line.push("X");
        } else {
            line.push(".");
        }
    }
    field.push(line);
}
size.push(11);
for (let y = 0; y < field.length; y++) {
    let line = y + ":  ";
    for (let x = 0; x < field[y].length; x++) {
        line += field[y][x];
    }
    console.log(line);
}
console.log("0-------------");

const history = [];
history.push(field);

for (let i = 1; i < cycleCount; i++) {
    const newField = [];
    for (let y = 0; y < field.length; y++) {
        const line = [];
        for (let x = 0; x < field[y].length; x++) {
            let nc = 0;
            if (field[y - 1]) {
                nc += field[y - 1][x - 1] === "X" ? 1 : 0;
                nc += field[y - 1][x] === "X" ? 1 : 0;
                nc += field[y - 1][x + 1] === "X" ? 1 : 0;
            }
            nc += field[y][x - 1] === "X" ? 1 : 0;
            nc += field[y][x + 1] === "X" ? 1 : 0;
            if (field[y + 1]) {
                nc += field[y + 1][x - 1] === "X" ? 1 : 0;
                nc += field[y + 1][x] === "X" ? 1 : 0;
                nc += field[y + 1][x + 1] === "X" ? 1 : 0;
            }
            if (field[y][x] === "X") {
                if (nc === 2 || nc === 3) {
                    line.push("X");
                } else {
                    line.push(".");
                }
            } else {
                if (nc === 3) {
                    line.push("X");
                } else {
                    line.push(".");
                }
            }
        }
        newField.push(line);
    }

    let h;
    for (h = history.length - 1; h >= 0; h--) {
        let same = true;
        for (let y = 0; same && y < history[h].length; y++) {
            for (let x = 0; same && x < history[h][y].length; x++) {
                if (history[h][y][x] !== newField[y][x]) {
                    same = false;
                }
            }
        }
        if (same) {
            break;
        }
    }
    if (h >= 0) {
        console.log("Iteration repeat at " + h);
        break;
    }

    field = newField;
    history.push(newField);

    for (let y = 0; y < field.length; y++) {
        let line = y + ":  ";
        for (let x = 0; x < field[y].length; x++) {
            line += field[y][x];
        }
        console.log(line);
    }
    console.log(i + "-------------");
}
console.log(size);
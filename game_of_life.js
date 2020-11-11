

// let field = [
// [".", ".", ".", ".", "."],
// [".", ".", "X", ".", "."],
// [".", ".", "X", ".", "."],
// [".", ".", "X", ".", "."],
// [".", ".", ".", ".", "."]
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

for (let i = 0; i < field.length; i++) {
    let line = i + ": ";
    for (let j = 0; j < field[i].length; j++) {
        line += field[i][j];
    }
    console.log(line);
}
console.log("-----------------------");

let NeighborCount = 0;

const NeighborCountFieldSize = 10;
let NeighborCountField = [];
for (let i = 0; i < NeighborCountFieldSize; i++) {
    const NeighborCountFieldSizeLine = [];

    for (let j = 0; j < size; j++) {
        if (Math.random() < 0.25) {
            NeighborCountFieldSizeLine.push("X");
        } else {
            NeighborCountFieldSizeLine.push(".");
        } 
    }
    NeighborCountField.push(NeighborCountFieldSizeLine);
}

let p = 0;
let go = true;

for (let p = 0; p <= 50; p++){

    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    
                if (i+x < 0 || j+y < 0 || i+x >= field.length || j+y >= field.length || x == 0  && y == 0) {
                } 
                else  {
                        if (field[i+x][j+y] === "X"){
                            NeighborCount++
                            
                        }
                }
                
                }
            }
            NeighborCountField[i][j] = NeighborCount;
            NeighborCount = 0;
        }
    }

    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            let neighbors = NeighborCountField[i][j];

            if (field[i][j] == "X") {
                
                if (neighbors < 2) {
                    field[i][j] = ".";
                } else if (neighbors == 2 || neighbors == 3) {
                    field[i][j] = "X";
                } else if (neighbors > 3) {
                    field[i][j] = ".";
                }
            } else if (field[i][j] == ".") {
            
                if (neighbors == 3) {
                    field[i][j] = "X";
                }
            }
        }
    }
    for (let i = 0; i < field.length; i++) {
        let line = i + ": ";
        for (let j = 0; j < field[i].length; j++) {
            line += field[i][j];
        }
        console.log(line);
    }
    console.log("-----------------------");
}


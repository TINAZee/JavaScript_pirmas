

let field = [
[".", ".", ".", ".", "X"],
[".", ".", "X", ".", "."],
[".", ".", "X", "X", "."],
[".", ".", "X", ".", "."],
[".", ".", ".", ".", "."]
];

let field2 = [
    [".", "X", ".", ".", "."],
    ["X", "X", ".", ".", "."],
    [".", ".", "X", "X", "X"],
    [".", ".", ".", "X", "X"],
    [".", ".", ".", "X", "."]
    ];

// const size = 5;
// let field = [];
// for (let i = 0; i < size; i++) {
//     const line = [];

//     for (let j = 0; j < size; j++) {
//         if (Math.random() < 0.25) {
//             line.push("X");
//         } else {
//             line.push(".");
//         } 
//     }
//     field.push(line);
// }

for (let i = 0; i < field.length; i++) {
    let line = i + ": ";
    for (let j = 0; j < field[i].length; j++) {
        line += field[i][j];
    }
    console.log(line);
}
console.log("-----------------------");

let NeighborCount = 0;
let outOfBorder = 0
let NeighborCountField = [];

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
            field2[i][j] = NeighborCount;
            NeighborCount = 0;
        }
    }

    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            let neighbors = field2[i][j];

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


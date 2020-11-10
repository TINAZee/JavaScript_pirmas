

let field = [
[".", "X", ".", ".", "."],
["X", "X", ".", ".", "."],
[".", ".", "X", "X", "X"],
[".", ".", ".", "X", "X"],
[".", ".", ".", "X", "."]
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
        field2[i][j] = NeighborCount++;
        NeighborCount = 0;
        outOfBorder = 0;
    }
}

console.log(field2);





// if(field[i-1][j-1] === "X") {
//     NeighborCount++
// }
// if(field[i-1][j+1] === "X") {
//     NeighborCount++
// }
// if(field[i-1][j+2] === "X") {
//     NeighborCount++
// }
// if(field[i][j-1] === "X") {
//     NeighborCount++
// }
// if(field[i][j+2] === "X") {
//     NeighborCount++
// }
// if(field[i+1][j-1] === "X") {
//     NeighborCount++
// }
// if(field[i+1][j+1] === "X") {
//     NeighborCount++
// }
// if(field[i+1][j+2] === "X") {
//     NeighborCount++
// }
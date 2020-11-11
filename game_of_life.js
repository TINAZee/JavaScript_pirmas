
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

let NeighborCountField = [];
for (let i = 0; i < size; i++) {
    const NeighborCountFieldSizeLine = [];

    for (let j = 0; j < size; j++) {
        NeighborCountFieldSizeLine.push(0);
    }
    NeighborCountField.push(NeighborCountFieldSizeLine);
}

let TEST = [];
let field2 = field;
let similarity = 0;
let printCount = 0;
let maxIterations = 50;

for (let p = 0; p <= maxIterations; p++){
        //count neighbors
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
        
        //put value in to next 2d array
        let TESTsizeArray = [];
        for (let i = 0; i < field2.length; i++) {
            let TESTsizeLine =[];
            for (let j = 0; j < field2[i].length; j++) {
                let neighbors = NeighborCountField[i][j];
                let a = field2[i][j];
                if (field2[i][j] == "X") {
                    
                    if (neighbors < 2) {
                        field2[i][j] = ".";
                    } else if (neighbors == 2 || neighbors == 3) {
                        field2[i][j] = "X";
                    } else if (neighbors > 3) {
                        field2[i][j] = ".";
                    }
                } else if (field2[i][j] == ".") {
                
                    if (neighbors == 3) {
                        field2[i][j] = "X";
                    }

                }
                let b = field2[i][j]
                if(a===b){
                similarity++ 
                }
                
                if (b == "X"){
                    TESTsizeLine.push("X")
                }else {
                    TESTsizeLine.push(".")
                }
               
            }
            TESTsizeArray.push(TESTsizeLine);
        }
        TEST.push(TESTsizeArray);
        if (similarity === size*size){
            break
        }
        
        similarity = 0;
        //prints 2d array
        printCount++ 
        for (let i = 0; i < field2.length; i++) {
            let line = i + ": ";
            for (let j = 0; j < field2[i].length; j++) {
            
                line += field2[i][j];
            
            }
            console.log(line);
        }
        console.log("-----------------------");
}
let x=0
console.log("Atspausdintas iteracijų skaičius:",printCount);

for (let p = 0; p < printCount; p++) {
    for (let i = 0; i < size; i++) {
        let line = i + ": ";
        for (let j = 0; j < size; j++) {
        
            line += TEST[p][i][j];
        
        }
        console.log(line);

    }
    x++
    console.log("-----------------------",x);
}



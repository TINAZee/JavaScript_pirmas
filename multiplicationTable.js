
//version 1
function space(value){
  let space = '';
  let pad = 4 - value;
    while( pad-- > 0 )
        space += ' ';            
  return space;
}

let result = ' x   ';
let from = 1;
let to = 10;

for (let i = from-1; i < to+1; i++) {

    for (let j = from-1; j < to+1; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']' + space((j+'').length+2);
        } 
        else if(j == 0 && i>0){
          result += '[' + i + ']';
        } 
        else if(i>0 && j>0){
        result += space((i*j+'').length ) + i*j;
        }
    }
    // \n is new line 
    result += '\n'
}

console.log(result);

//version 2

let from1 = 1;
let to1 = 10;

for (let i = from; i < to; i++) {
    str = i + "\t"
    for (let j = from; j < to; j++) {
        str += (i*j)+"\t"
    }
console.log(str);
  }

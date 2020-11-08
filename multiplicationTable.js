
function space(value){
  let buff = '';
  let pad = 4 - value;
    while( pad-- > 0 )
            buff += ' ';            
  return buff;
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
    result += '\n'
}

console.log(result);
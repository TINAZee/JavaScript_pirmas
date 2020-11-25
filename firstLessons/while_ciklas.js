//suma tik lyginiu skaiciu 
var i = 0;
sum1 = 0;

while (i <= 1000) {
    sum1 += i;
    i += 2;
}
console.log(sum1);
//kitas variantas 

var i = 0;
sum = 0;
while (i <= 1000) {
    if (i % 2 == 0) {
        sum += i;
    }
    i++
}
console.log(sum);
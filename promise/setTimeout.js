for (let i =1; i <= 3; i++){
    let j = 5;
    setTimeout(function() {
        console.log(i);
        console.log(j++);
    }, 10);
}
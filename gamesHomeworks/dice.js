const dice = [0, 0, 0, 0, 0, 0];


    for (let i = 0; i < 1000; i++) {
        const roll = Math.floor(Math.random() * 6);
        dice[roll]++;
    }

    for (let i = 0; i < dice.length; i++) {
        console.log(i + 1, dice[i]);
    };
   

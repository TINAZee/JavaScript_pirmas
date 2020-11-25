let choice;


do {
    choice = prompt('Your choise is: ');
    choice = parseInt(choice);
    if (choice >= 0 && choice <= 3) {
        if(choice) {
            let cc = Math.floor(Math.random()* 3) + 1;
            console.log(cc);
            if (choice === cc) {
                console.log('Deuce');
            } else {
                if(
                    (choice === 1 && cc === 3) ||
                    (choice === 2 && cc === 2) ||
                    (choice === 3 && cc === 1)
                ) {
                    console.log('You win');
                } else {
                    console.log('You lose');
                }
            }
        }
    } else {
        alert('Reikia spausti skaicius nuo 0 iki 2');
    }
} while (choice !==0);

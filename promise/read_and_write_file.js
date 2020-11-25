
const fs = require("fs");

fs.readFile("./promise/text1.txt", (err, data1) => {
    if (err) {
        console.log('Tekstas nerastas: ' + err);
        return;
    }
    console.log('Perskaiciau: ' + data1);
    fs.readFile("./promise/text2.txt", (err, data2) => {
        if (err) {
            console.log('Tekstas nerastas: ' + err);
            return;
        }
        console.log('Perskaiciau: ' + data2);
        fs.readFile("./promise/text3.txt", (err, data3) => {
            if (err) {
                console.log('Tekstas nerastas: ' + err);
                return;
            }
            console.log('Perskaiciau: ' + data3);

            let data = data2 + data1 + data3;
            fs.writeFile("./promise/textAll.txt", data, (err) => {
                if (err) throw err;
                console.log('Viskas surašyta kartu');
            });
        });
    });
});


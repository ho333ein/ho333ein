let x = [];
let score = [];
let avrage = 0;
for (i = 0; i < 4; i++) {
    x[i] = parseInt(prompt("enter your score"));

}
for (i = 0; i < 4; i++) {
    avrage += x[i];
}

let useravragescore = (avrage / x.length);

console.log(`your avrage is : ${useravragescore}`);




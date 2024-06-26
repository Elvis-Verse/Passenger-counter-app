
let para = document.querySelector('#welcome-el');
let countEl = document.querySelector('#count-el');
let previousEl = document.querySelector("#previous-el");
console.log(previousEl)

let count = 0;

let shout = ()=> {
    count = count + 1;
    countEl.innerHTML = count;
}

let save = () => {
    previousEl.innerHTML = previousEl.innerHTML + " " + count + " -";
    count = 0;
}
const username = prompt('What is your name?  ');
let welcomeMessage = `Hi ${username}! Welcome. Congrat on your job as the new Counter Man. Count away!`
para.innerHTML = welcomeMessage;


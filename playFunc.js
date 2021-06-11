const myname = 'Shibli';
let age = 26;
const hasHobbies = true;


const myUsr = (usrname, usrage,usrhasHobbies) => (
        "My NAME is :" +
        usrname +
        " age is :" +
        usrage +
        " and hasHobbies :" +
        usrhasHobbies
    ); 

const myadd = (a, b) => a + b;

//decrease by 1---
const mydec = (d) => d - 1;
//random test
const myrand = () => 1 + 1;

console.log(myrand());

console.log("Decreased "+ 3 + " after " + mydec(3));

console.log(myUsr(myname, age, hasHobbies)); 

console.log(myadd(1,2));

const person = {
    usr_name: "Shibli",
    age: 26,
    greet: function()
    {
        console.log("Alhamdulillah, this is: " + this.name)
    }
};
//destrucuting object
const nameAge = ({usr_name, age}) =>
{
   // console.log(usr_name + " " + age);
}
nameAge(person);
//name
let {usr_name, age} = person;
console.log(usr_name, age);

const des = {usr_name, age} = person;
//console.log(usr_name, age); 

const myArr = ["cricket", "football", "baseball"];

const newArr = [arr1, arr2, arr3] = myArr;
// console.log(arr1, arr2, arr3);
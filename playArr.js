const person = {
    name: "Shibli",
    age: 26,
    greet: function()
    {
        console.log("Alhamdulillah, this is: " + this.name)
    }
}; 

const myHobbies = ['Biking', 'Cycling'];

//for (let hobby of myHobbies)
//{
//  console.log(hobby);
//}
//console.log(myHobbies);

console.log(myHobbies.map(hobby => "Hobby: " + hobby));
console.log(myHobbies);
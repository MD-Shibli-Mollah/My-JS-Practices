//Spead rest if folloed by ... (3 dots) -useful for copying OBJ or Arr
const person = {
    name: "Shibli",
    age: 26,
    greet: function()
    {
        console.log("Alhamdulillah, this is: " + this.name)
    }
}; 
//person.greet();
const copPerson = {...person}
console.log(copPerson);

//Arr Portion

const myCourses = ['js', 'Node.js', 'mongoDB', 'Express.js']
let copMyCrs = [...myCourses]
console.log(copMyCrs);
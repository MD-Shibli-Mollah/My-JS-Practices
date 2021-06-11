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
//more ***notes: Numbers of args can be sent using ... (3 dots) and position the by their Array Pos
const toArr = (...args) => args[0] + args[1] + args[2] + args[3] + args[4] + args[5];
console.log(toArr(1,2,3,4,5,6));
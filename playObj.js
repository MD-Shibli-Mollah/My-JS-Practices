const person = {
    name: "Shibli",
    age: 26,
    greet: function()
    {
        console.log("Alhamdulillah, this is: " + this.name)
    }
}; 

person.greet();
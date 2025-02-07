const userDetails = {
    name : "Akash Nagar",
    age : 23,
    skills : ["javascript", "Node.js", "React.js"],

    addSkills : function(data){
        this.skills.push(data);
    },

    getDetails : function(){
        return `${this.name} is ${this.age} years old and is skilled in ${this.skills.join(", ")}.`;
    }
};

console.log(userDetails.getDetails());

userDetails.addSkills("mongoDB");
console.log(userDetails.getDetails());

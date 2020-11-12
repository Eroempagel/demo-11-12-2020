
/*
let user = {
    firstName: "Test",
    lastName: "User",
    userName: "mr_bob",
    age: 45,
    email: "bob@gmail.com",
    sayName: function() {
        //console.log(this.firstName + ' ' + this.lastName)
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

console.log(user.email);
let findProperty = "email";

console.log(user[findProperty]);

user.firstName = 'Bob'

console.log(user)

user.sayName();
*/

/*
let  papaCat = {
    colorStyle: "Calico",
    colors: ["white", "grey", "black"],
    legs: 4,
    eyeColor: 'none',
    meowsAlot: true,
    breed: "Siamese",
    name: 'Tom',
    destruction: 100,
    listenToProblems: true,
    getAdopted: function() {
        if (this.listenToProblems === true && this.destruction < 100){
            return true;
        } else {
            return false;
        }
    }, 
    declaw: function() {
        this.destruction -= 50; // this.destuction = this.destruction - 50
    },
    crossTheRoad: function() {
        if (Math.random() < .25 && this.legs > 0) {
            this.legs--;
        }
    }
}

papaCat.crossTheRoad();

papaCat.declaw();
console.log(papaCat.getAdopted());

console.log(papaCat)
*/
for (let i = 1; i<=20; i++) {
    let numDiv = document.createElement("div");
    numDiv.append(i)
    document.body.append(numDiv);
    console.log(numDiv);
}

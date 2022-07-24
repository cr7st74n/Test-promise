// Axios module to import a url in form of a Promise 
// const axi = require("axios");

// const data1 = axi.get("https://swapi.dev/api/people/1/");

// const sw = data1.then((data)=>{
//     console.log(data);
// })

// console.log(sw);

class Animal{

    // constructor(){
    //     this.kegs = 4;
    // }

    eat(){
    console.log("eating a Sakura")
  }
}

class Bear extends Animal{
    constructor(name,noise){
        super();
        this.name = name;
        this.noise = noise;
    }
}

class Fox extends Animal{
    constructor(name,noise){
        super();
        this.name = name;
        this.noise = noise;
    }
}

const Jogi = new Bear("Jogi","rouu");
const Kurama =new Fox("Kurama","hola naruto");
console.log(Jogi);
console.log(Kurama);
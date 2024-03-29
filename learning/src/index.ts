console.log("oi bilalo aka the best coder");



// arrays 
let names : string[] = ['bilal' , 'ww' , 'oiiii']

names.push("typescript")

console.log(names);

let things = [1, true , 'oi']
const t = things[0]



// object literals

let student : {firstName : string , Age : number , Adm: number} = {
    firstName : "bilal" , 
    Age : 30,
    Adm : 111222222222
}

student.firstName = "ahmed"
student.Adm = 2

console.log(student);


// type infrences with object literals

let person = {
    name : "oi",
    score : 35
}

person.name = 'belal'
person.score = 100

const score = person.score
console.log(person);


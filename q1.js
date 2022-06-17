//Example 1: Display Numbers from 1 to 5

// program to display numbers from 1 to 5
const n = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i);     // printing the value of i
}


//Example 2: Display Sum of n Natural Numbers

// program to display the sum of natural numbers
let sum = 0;
const n1 = 100

// looping from i = 1 to n1
// in each iteration, i is increased by 1
for (let i = 1; i <= n1; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);
//The above program to add sum of natural numbers can also be written as

// program to display the sum of n natural numbers
let sum1 = 0;
const n2 = 100;

// looping from i = n2 to 1
// in each iteration, i is decreased by 1
for(let i = n2; i >= 1; i-- ) {
    // adding i to sum1 in each iteration
    sum1 += i; // sum1 = sum1 + i
}

console.log('sum1:',sum1);


// infinite for loop
for(let i = 1; i > 0; i++) {
    // block of code
}


//for...of with Arrays

// array
const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}

//for...of with Strings

// string
const string = 'code';

// using for...of loop
for (let i of string) {
    console.log(i);
}


//for...of with Sets

// define Set
const set = new Set([1, 2, 3]);

// looping through Set
for (let i of set) {
    console.log(i);
}


//for...of with Maps

// define Map
let map = new Map();

// inserting elements
map.set('name', 'Jack');
map.set('age', '27');

// looping through Map
for (let [key, value] of map) {
    console.log(key + '- ' + value);
}


//User Defined Iterators

// creating iterable object
const iterableObj = {

    // iterator method
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false};
                 }
                else if (step === 2) {
                    return { value: '2', done: false};
                }
                else if (step === 3) {
                    return { value: '3', done: false};
                }
                return { value: '', done: true };
            }
        }
    }
}

// iterating using for...of
for (const i of iterableObj) {
 console.log(i);
}


//for...of with Generators

// generator function
function* generatorFunc() {
  
    yield 10;
    yield 20;
    yield 30;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
    console.log(value);
}


//JavaScript for...in loop
//Example 1: Iterate Through an Object

const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}


//Example 2: Update Values of Properties

const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}

//for...in with Strings

//const string = 'code';

// using for...in loop
for (let i in string) {
    console.log(string[i]);
}


//for...in with Arrays

// define array
const arr = [ 'hello', 1, 'JavaScript' ];

// using for...in loop
for (let x in arr) {
    console.log(arr[x]);
}

for(var i = 0; i < 3; i++){
    console.log(i)
 }

 
for(var num=9;num>0;num--){
    console.log(num)
}

for (var s=25;s<=30;s++){
    console.log(s)
 }


var cars = ["Maruti", "Mercedes", "BMW"];
for (car in cars){
    console.log(cars[car])
}


const campus_list=["Bangalore","Dharamshala","Pune","Bangalore_another"]
for(let campus in campus_list){
   console.log(campus)
}


let name=["komal","shweta","rani","swati","mahi","shanti","sarmistha"]
for(let lname of name){
   console.log(lname);
}


arr=["a","b","g","r","t"]
for(let character of arr){
console.log(character);
}


number_list=[23,"maan",67,"gouri",90,45,34]
for(let num of number_list){
console.log(num);
}
 
// let obj={"name":"sharmistha","age":21,"hobby":"watching movie",
//    "goal":"fullstack_developer"}
// for(let prop of obj){
//    console.log(prop)
// }
// // TypeError: obj is not iterable.


let Navgurukul = ['Pune', 'Bangalore', 'Sarjapur'];

// cmpKey are the property keys
for (let cmpKey in Navgurukul) {
 console.log(cmpKey);
}
//console.log(“------------------”)
// cmpValue are the property values
for (let cmpValue of Navgurukul) {
 console.log(cmpValue)
}

// Output:

// 0
// 1
// 2
// ------------------------
// Pune
// Bangalore
// Sarjapur


const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
for(let pro in campus){
 console.log(campus[pro])
}

console.log("--------------");
 
for(let pro of campus){
 console.log(pro)
}
 
// Output:
// Bangalore_campus
// 2016
// three_months
// --------------
// It will throw an error because for of can’t iterate through objects.






 
 









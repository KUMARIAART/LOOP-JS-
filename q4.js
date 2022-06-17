//using a labeled countinue with for loop

// let i, j;

// loop1:
// for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
//    loop2:
//    for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
//       if (i === 1 && j === 1) {
//          continue loop1;
//       }
//       console.log('i = ' + i + ', j = ' + j);
//    }
// }

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"


// let itemsPassed = 0;
// let i, j;

// top:
// for (i = 0; i < items.length; i++) {
//   for (j = 0; j < tests.length; j++) {
//     if (!tests[j].pass(items[i])) {
//       continue top;
//     }
//   }

//   itemsPassed++;
// }


//using a labeled break with for loop

// let i, j;

// loop1:
// for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
//    loop2:
//    for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
//       if (i === 1 && j === 1) {
//          break loop1;
//       }
//       console.log('i = ' + i + ', j = ' + j);
//    }
// }

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
// Notice the difference with the previous continue example


let allPass = true;
let i, j;

top:
for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      allPass = false;
      break top;
    }
  }
}


//using a labeled block with break 

foo: {
    console.log('face');
    break foo;
    console.log('this will not be executed');
  }
  console.log('swap');
  
  // this will log:
  
  // "face"
  // "swap"



// Find length of object
// To find the length of an object we can use builtin functions Object.keys() either we can use Object.values().
//Code Example
const birds={name:"Bald Eagle",type:"Hawk",ScientificName:"HaliaeetusLeucocephalus"}
          
console.log(Object.keys(birds).length)

// Output: 
// 3


// Code Example
// const birds={name:"Bald Eagle",type:"Hawk",
//    ScientificName:"HaliaeetusLeucocephalus"}
          
// console.log(Object.values(birds).length)
      

// // Output: 
// //  3







 
  
  




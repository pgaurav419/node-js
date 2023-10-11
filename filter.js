const app = require("./app")
// const fs = require("fs") // one way to import file
const gs = require("fs").writeFileSync

let a = "90"
// if (a===90) {
//     console.log("matched");
// }
// else{
//     console.log("not matched");
// }

// for(i=1;i<=10;i++){
//     console.log(i);
// }

//filter
// const arr = [2, 3, 4, 5, 6, 7, 8, 9]
// const filterValue = arr.filter((item) => {
//     return item % 2 === 0
// })
// console.log(filterValue);


// get data from the different file
// console.log(app.x); 
// console.log(app.z());


//global and non-global module
console.log("global file")
// fs.writeFileSync("hello.txt", "non global file") // one way to import
gs("gs.txt", "second way to import file") // second way to import file

console.log(__dirname); // directory name
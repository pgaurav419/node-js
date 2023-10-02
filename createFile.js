// console.log(process.argv[2]);

const fs = require('fs')
const path = require('path')


// ADD SINGLE FILE AT A TIME

// const input = process.argv
// if (input[2] == 'add') {

//     fs.writeFileSync(input[3], input[4])
// }
// else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3])
// }
// else {
//     console.log("invalid output")
// }





const dirPath = path.join(__dirname, 'files')
console.log(dirPath);

// ADD MULTIPLE FILE AT THE SAME TIME

// for (i = 0; i <= 4; i++) {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, "a simple text file")
// }


// get all files inside the folder

fs.readdir(dirPath, (err, files) => {
    files.forEach((item) => {
        console.log(item);
    })
})

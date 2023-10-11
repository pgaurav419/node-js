const fs = require('fs')
const path = require('path')

const dirpath = path.join(__dirname, 'crud')
// const fileName = `${dirpath}/apple.txt`
// fs.writeFileSync(fileName, 'apple.txt') // create file inside the folder

// fs.readFile(fileName, 'utf8', (err, item) => {
//     console.log(item);
// })  // read file

// fs.appendFile(fileName, ' this is an update file context', (err) => {
//     if (!err) {
//         console.log('file is update');
//     }
// })  // update file data


// fs.rename(fileName, `${dirpath}/fruit.txt`, (err) => {
//     if (!err) {
//         console.log('file is update');
//     }
// })  // rename file name


fs.unlinkSync(`${dirpath}/fruit.txt`) // delete file
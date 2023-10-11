const http = require('http')


http.createServer((req, res) => {
    res.write("hello this is gaurav")
    res.end;
}).listen(3000)

// test(a,b){

// }

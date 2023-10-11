const express = require('express')
const reqFilter = require("./middleware")
const app = express()



// app.use(reqFilter)  // it will work on the all the page in the project

app.get('/', (req, res) => {
    res.send("welcome to the Home Page")
})

app.get('/about', reqFilter, (req, res) => {
    res.send("welcome to the About Page")
})

app.listen(3000)
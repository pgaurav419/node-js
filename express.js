const express = require('express')

const app = express()

app.get('/', (req, res) => {
    // console.log('req by client =>>', req.query.name);
    res.send(`<h1>Hello world</h1>
     <a href="/about">Go to about page</a>
    `)
})

app.get('/about', (req, res) => {
    res.send(`
    <input type ="text" placeholder = "write your name"/>
    <button>Click me</button>

    `)
})

app.listen(3000)
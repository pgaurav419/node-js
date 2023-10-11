const express = require("express")
const path = require('path')

const app = express() //executive function
const publicPath = path.join(__dirname, 'public')
console.log(publicPath);

// app.use(express.static(publicPath))

//we will use this method for the remove extension
app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

// 404 page

app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404page.html`)
})


//Dynamic page

app.set('view engine', 'ejs')

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.listen(3000)
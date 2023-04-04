const express = require("express")
const morgan = require("morgan")

const app = express();
app.set('view engine', 'ejs')

app.use(express.static('public'))
// homepage route
app.get('/', (req, res)=>{
    res.render("index")
})

// services route
app.get('/services', (req, res) =>{
    res.render('services')
})

// Get quote route
app.get('/quote', (req, res)=>{
    res.render('quote')
})

// About us page
app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/careers', (req, res)=>{
    res.render("careers")
})
// contact page
app.get('/contact', (req, res) => {
    res.render("contact")
})

// Error page 
app.use((req, res)=>{
    res.render("404")
})

// server port
app.listen(3000, ()=>{
    console.log("Listening to port: 3000")
})

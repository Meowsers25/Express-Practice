console.log('Our first Express app is running....')
const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hi there!')
})

app.get('/bye', function(req, res){
    res.send('Goodbye')
})

app.get('/dog', function(req, res){
    console.log('SOMEONE MADE A REQUEST TO DOG....')
    res.send('MEOW!')
})

//use colon(:) to define route parameters
app.get('/r/:subReddit', function(req, res){
    // console.log(req)
    let subreddit = req.params.subReddit
    res.send(`WELCOME TO THE ${subreddit.toUpperCase()} PAGE`)
})

app.get('*', function(req, res){
    res.send('YOURE A STAR')
})

app.listen(3000, function(){
    console.log('Server has started.....')
})

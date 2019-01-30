console.log('Our first Express app')
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

app.get('*', function(req, res){
    res.send('YOURE A STAR')
})

app.listen(3000, function(){
    console.log('Server has started.....')
})

const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hi there, Welcome to my assignment!')
})

app.get('/speak/:animal', function(req, res){
    let sounds = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof',
        cat: 'I hate you...'
    }
    let correctAnimal = req.params.animal.toLowerCase()
    let sound = sounds[correctAnimal]
    res.send(`The ${correctAnimal} says '${sound}'`)
})

app.get('/repeat/:noise/:numbr', function(req, res){
    let noise = req.params.noise
    let numbr = Number(req.params.numbr)
    let result = ""
    for(let i = 0; i < numbr; i++){
        result += `${noise} `
    }
    res.send(result)
})

app.get('*', function(req, res){
    res.send('Sorry, page not found.......What are you doing with your life???')
})

app.listen(3000, function(){
    console.log('Server has started.....')
})

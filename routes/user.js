const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/', (req, res) => {
    console.log(req.body)
    if(req.body) {
        res.send({id:req.body.id, name:req.body.name})
    }
    else {
        res.status(400)
        res.send();
    }
    
})

userRoutes.get('/', (req, res) => {
    res.send({id:0, name:"Henry"})
})

module.exports = userRoutes
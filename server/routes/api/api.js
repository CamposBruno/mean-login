const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('config');


const HTTP = require('http');
const usersRouter = require('./users');

const uri = process.env.MONGO_URI || config.get('mongodb.uri'); 

mongoose.promise = global.promise;

mongoose.connect(uri, (err) =>{
    if(err){
        const res = new Response();
        res.status(500).json({
            'status' : 'NOK',
            'message' : 'Erro ao conectar ao mongodb'
        });
    }
});

router.use('/users', usersRouter);
router.get('/', (req, res) => {
    res.send('api works');
});



module.exports = router;

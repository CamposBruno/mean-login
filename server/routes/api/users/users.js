const express = require('express');
const router = express.Router();
const HTTP = require('http');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize, ErrorFormatter } = require('express-validator/filter');

const User = require('../../../models/users');

router.post('/login', (req, res) => {
    console.log('trying to loggin user');
    const query  = { 
        email : req.body.email
     };
    User.findOne(query).exec((err, user) => {
        if(err){
            console.log("Err finding users", err);
            return res.status(500).json({
                title : 'Error finding users',
                err: err
            });
        }

        if(!user){
            return res.status(401).json({
                title : 'Login Failed',
                err: { message : 'Not able to authenticate with given credentials'}
            });
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title : 'Login Failed',
                err: { message : 'Not able to authenticate with given credentials'}
            });
        }

        const token = jwt.sign({user : user}, config.get('server.api.secret'), {expiresIn : 7200});

        res.status(200).json({
            title : 'Successfull login',
            message : 'you will be redirected shortly.',
            token : token,
            userId : user._id
        });

    });

    
});


router.get('/authenticated', (req, res) =>{
    jwt.verify(req.query.token, config.get('server.api.secret'), (err, decoded) =>{
        if(err){
            return res.status(401).json({
                title : 'Not Authenticated',
                err : err
            })
        }
        res.status(200).json({
            title : 'ok',
            user : req.query.token
        });
    });
});
/*
router.use('/', (req, res, next) => {
    jwt.verify(req.query.token, config.get('server.api.secret'), (err, decoded) =>{
        if(err){
            return res.status(401).json({
                status : 'Not Authenticated',
                err : err
            })
        }
        next();
    })
});
*/

router.post("/", [
    check('firstName').trim().exists(),
    check('lastName').trim().exists(),
    check('password').trim().exists(),
    check('email').trim().exists().matches(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/).withMessage('Must Be e-mail')
    
    
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            title : 'Validation error',
            err: errors.mapped()
        });
    }

    const sanitizedUser = matchedData(req);

    const user = new User({
        firstName : sanitizedUser.firstName,
        lastName : sanitizedUser.lastName,
        email : sanitizedUser.email,
        password : bcrypt.hashSync(sanitizedUser.password, 10)
    });
    user.save((err, result) => {
        if(err){
            console.log("Err adding user", err);
            res.status(500).json({
                title : 'Error adding users',
                err: err
            });
        }else{
            res.status(201).json({
                title : 'User created',
                message : 'was created successfully'
            });
        }
    })
});

function findUserByEmail(email){
    return User.findOne({email : email});
}

module.exports = router;
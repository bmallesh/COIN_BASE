const express = require('express')
const mail = require('nodemailer');
const bcrypt = require('bcryptjs');
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')
mj = require("mongojs")
conn = mj("mongodb://localhost:27017/simple-mern-passport")

// forgot password API
router.post('/forgot', function (req, res) {
    req = req.body;
    User.find({ username: req.username }, function (err, result) {
        if (result.length == 0) {
            console.log("email not exist")
        } else {
            var mailobj = mail.createTransport({
                service: 'gmail',
                auth: {
                    user: 'bmallesh450@gmail.com',
                    pass: 'Anusha123@'
                }
            });
            mailobj.sendMail({
                from: 'bmallesh450@gmail.com',
                to: req.username,
                subject: "activation key",
                html: "<a href='http://localhost:3000/resetpwd?uid=" + result[0]._id + "'>click me</a>"
            }, async (err, result) => {
                if (err) {
                    console.log(err)
                    return res.json({
                        status: "error",
                        data: [],
                        error: ""
                    })
                } else {
                    console.log(result)
                }
            })
        }
        res.send({
            status: "success",
            data: result,
            error: ""
        })
});
})


// user signup API
router.post('/', (req, res) => {
    console.log('user signup');
    const { firstname, lastname, username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.send({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.send(savedUser)
            })
            sendingEmail(username,'signup','<h1>thank you</h1>')
        }
    })
})

function sendingEmail(email,subject,html){
    var mailobj = mail.createTransport({
        service: 'gmail',
        auth: {
            user: 'bmallesh450@gmail.com',
            pass: 'Anusha123@'
        }
    });
    mailobj.sendMail({
        from: 'bmallesh450@gmail.com',
        to: email,
        subject: subject,
        html: html
    }, async (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
}

//  user login API
router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)


// user password reset
router.post('/reset', function (req, res) {
    console.log('routes/user.js, reset password req.body');
    console.log(req.body)
    data = req.body
    var pwd = bcrypt.hashSync(data.newpassword, 10);
    console.log("pass" + pwd)
    User.update({ _id: data.uid }, { $set: { password: pwd } }, function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log("success")
        var userInfo = {
            data: "success"
        };
        res.send(userInfo)
    })
})

//  getting user data API
router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

//  user logout API
router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router
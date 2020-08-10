var fs = require('fs')

var express = require('express')

var Users = require('./users')

var router = express.Router()
router.get('/', function(req, res) {
    res.render('index.html')
})



router.get('/list', function(req, res) {

    fs.readFile('./db.json', 'utf8', function(err, data) {
            if (err) {
                return res.status(500).send('Server error.')
            }
            //JSON.parse(data).users
            res.render('list.html', {
                users: JSON.parse(data).users
            })
        })
        // console.log(req.body)

})

router.post('/list', function(req, res) {
    Users.save(req.body, function(err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/list')
    })
})

router.get('/delete', function(req, res) {

    fs.readFile('./db.json', 'utf8', function(err, data) {
            if (err) {
                return res.status(500).send('Server error.')
            }
            //JSON.parse(data).users
            res.render('list.html', {
                users: JSON.parse(data).users
            })
        })
        // console.log(req.body)

})


router.post('/delete', function(req, res) {
    Users.delete(req.body, function(err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/list')
    })
})

module.exports = router
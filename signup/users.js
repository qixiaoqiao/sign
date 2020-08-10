var dbPath = './db.json'
var fs = require('fs')
const { callbackify } = require('util')

exports.save = function(user, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var users = JSON.parse(data).users

        user.id = users[users.length - 1].id + 1

        users.push(user)
        var filedata = JSON.stringify({
            users: users
        })
        fs.writeFile(dbPath, filedata, function(err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

exports.delete = function(id, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var users = JSON.parse(data).users
        var deleteid = users.findIndex(function(item) {
            return item.id === parseInt(id)
        })
        users.splice(deleteid, 1)
        var filedata = JSON.stringify({
            users: users
        })
        fs.writeFile(dbPath, filedata, function(err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
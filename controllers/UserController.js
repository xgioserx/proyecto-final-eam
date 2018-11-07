let User = require('../models/User')

let UserController = {

// Buscar usuario por id
find(req, res) {
     User.findById({
_id: req.params.id
})
.then(doc => {
res.json(doc)
}).catch(err => {
res.json(err)
})
},
// Crear usuario
store(req, res) {
    User.create({
user: req.body.user,
password: req.body.password
}).then(doc => {
    res.json(doc)
}).catch(err => {
res.json(err)
})
},
    }
    module.exports = UserController;
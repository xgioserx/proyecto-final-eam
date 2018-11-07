
let express = require('express');

let PlaceController = require('../controllers/PlaceController');
let UserController = require('../controllers/UserController');

let router = express.Router();

// Listar todos los lugares
router.get('/places', PlaceController.show);
// Buscar un lugar por id
router.get('/places/:id', PlaceController.find);
// Crear un lugar
router.post('/places', PlaceController.store);
// Actualizar un lugar
router.put('/places/:id', PlaceController.update);
// Eliminar un lugar
router.delete('/places/:id', PlaceController.destroy);
// Buscar un usuario por id
router.get('/users/:id', UserController.find);
// Crear un usuario
router.post('/users', UserController.store);
module.exports = router;

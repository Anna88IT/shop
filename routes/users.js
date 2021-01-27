const express = require('express');
const router = express.Router();
const UserController = require("../Controllers/users.controllers")

/* GET users listing. */
router.get('/', UserController.getAll);
router.post('/', UserController.create);
router.get('/:id', UserController.getOne);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.remove);

module.exports = router;

const express = require('express');
const router = express.Router();
const ProductController = require("../Controllers/products.controllers")

/* GET users listing. */
router.get('/', ProductController.getAll);
router.post('/', ProductController.create);
router.get('/:id', ProductController.getOne);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.remove);

module.exports = router;

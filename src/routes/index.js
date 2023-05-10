const express = require('express');
const userRouteruter = require('./user.router');

const router = express.Router();

// colocar las rutas aquí
router.use("/user", userRouteruter);

module.exports = router;
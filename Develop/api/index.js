const router = require('express').Router();
const exerciseRoutes = require('./api/exerciseRoutes.js');

router.use('/exercises', exerciseRoutes);

module.exports = router;

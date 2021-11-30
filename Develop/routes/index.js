const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes.js');
const htmlRoutes = require('./htmlRoutes');
router.use('/api', exerciseRoutes);
router.use('/', htmlRoutes);

module.exports = router;

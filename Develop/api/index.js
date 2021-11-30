const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/exercises', exerciseRoutes);
router.use('/projects', projectRoutes);

module.exports = router;

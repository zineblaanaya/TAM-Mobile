const { Router } = require('express');
const router = Router()
const {signup} = require('../controllers/control')

// router.post('/patatev', patate );
// router.post('/tomateh', tomate );
// router.post('/nomcheminrequete', nomfonction );

// Route d'inscription
router.post('/signup', signup);



module.exports = router;
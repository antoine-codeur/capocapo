// route api
const express = require('express');
const router  = express.Router(); 
const RessourcesController = require('../controllers/ressources.controller'); 

router.get('/ressources', RessourcesController.getRessources); 
router.post('/ressources', RessourcesController.newRessource);

module.exports = router;
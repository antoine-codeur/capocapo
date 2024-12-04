// ressources controller
const { get } = require("mongoose");
const Ressources = require("../models/ressources");



  getRessources = (req, res) => {

    Ressources.find()
      .then((ressources) => res.json(ressources))
      .catch((error) => res.status(400).json({ error: error.message }));
    
  }

  newRessource = (req, res) => {
    const ressource = new Ressources(req.body);
    ressource.save()
      .then(() => res.json({ message: "Ressource saved!" }))
      .catch((error) => res.status(400).json({ error: error.message }));
  }
module.exports = { 
    getRessources, 
    newRessource 
};
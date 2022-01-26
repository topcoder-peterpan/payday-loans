const wizardRoutes = require('express').Router();
const Wizard = require('../controller/Wizard');

wizardRoutes.post('/register', Wizard.createForm);
wizardRoutes.get('/test', (req, res) => {
    res.send("welcome");
});

module.exports = wizardRoutes;
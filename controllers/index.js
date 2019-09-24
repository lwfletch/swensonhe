const CoffeeMachine = require('../models/coffeeMachines')
const CoffeePod = require('../models/coffeePods')


exports.getCoffeeMachines = function(req, res){
    var dbQuery = {}
    if(req.query && req.query != ''){dbQuery = req.query}
    CoffeeMachine.find(dbQuery, (err, coffeeMachines) => {
    if (err) res.status(500).send(error)
    res.status(200).json(coffeeMachines);
  });
}

exports.getCoffeePods = function(req, res){
    var dbQuery = {}
    if(req.query && req.query != ''){dbQuery = req.query}
    CoffeePod.find(dbQuery, (err, coffeePods) => {
        if (err) res.status(500).send(error)
        res.status(200).json(coffeePods);
    });
}
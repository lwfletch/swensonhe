let mongoose = require('mongoose')

const coffeeMachineSchema = new mongoose.Schema({
  product_id:String,
  type:String,
  model:String,
  water_line:Boolean
});

const CoffeeMachine = mongoose.model('coffee_machines', coffeeMachineSchema);
module.exports = CoffeeMachine
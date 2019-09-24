let mongoose = require('mongoose')

const coffeePodSchema = new mongoose.Schema({
    product_id:String,
    type:String,
    flavor:String,
    dozen:Number
});

const CoffeePod = mongoose.model('coffee_pods', coffeePodSchema);
module.exports = CoffeePod
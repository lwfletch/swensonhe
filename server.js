let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose')
const controller = require('./controllers/index')

const app = express();
const url = "mongodb://admin:tjkm2010@ds011258.mlab.com:11258/swenson_he"

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/coffeemachines', controller.getCoffeeMachines)

app.get('/coffeepods', controller.getCoffeePods);

mongoose.set('useFindAndModify', false);
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, poolSize: 5}).then(() => {
   console.log("Connected to Database");
   let server = app.listen(3000, function () {
      let port = server.address().port
      console.log("Listening at port %s", port)
   })
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

module.exports = app;
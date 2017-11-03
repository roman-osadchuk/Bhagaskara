var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var my_module = require('./my_module.js');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/bhagasdb');


var Schema = mongoose.Schema;

var UserDataSchema = new Schema({
    ClientName: String,
    ClientEmail: String,
    ClientMessage: String,
    InsertTime: String
}, {collection: 'client-data'});

var UserData = mongoose.model('UserData', UserDataSchema);



router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next){
    UserData.find()
    .then(function(doc) {
        res.render('db_store', {items: doc});
    });
});

router.post('/insert', function(req, res, next){
    var item = {
        ClientName: req.body.client_name,
        ClientEmail: req.body.client_email,
        ClientMessage: req.body.client_message,
        InsertTime: my_module.JSClock()
    };
    
    var data = new UserData(item);
    data.save();
    
    res.send({message: "Your data has been sent"});
});

router.post('/update', function(req, res, next){
    
    var id = req.body.client_id;
    
    UserData.findById(id, function(err, doc){
        if(err){
            console.error("No entry found");
        }
        doc.ClientName = req.body.client_name;
        doc.ClientEmail = req.body.client_email;
        doc.ClientMessage = req.body.client_message;
        doc.save();
    });
    
    res.redirect('/get-data');
});

router.delete('/delete', function(req, res, next){
    var id = req.body.id;
    
    UserData.findByIdAndRemove(id).exec();
    
    res.redirect('/get-data');
});


router.get('/db_control', function(req, res, next) {
  res.render('db_store');
});


module.exports = router;

var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');


var url = 'mongodb://localhost:27017/bhagasdb';

    
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next){
    var resultArray = [];
    mongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('client-data').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
            
        }, function() {
            db.close();
            res.render('db_store', {items: resultArray});
        });
    });
});

router.post('/insert', function(req, res, next){
    var item = {
        ClientName: req.body.client_name,
        ClientEmail: req.body.client_email,
        ClientMessage: req.body.client_message
    };
    
    mongoClient.connect(url, function(err, db){
        assert.equal(null, err);
        db.collection('client-data').insertOne(item, function(err, result){
            assert.equal(null, err);
            console.log('Item inserted');
            db.close();
        });
    });
    
    res.send({message: "Your data has been sent"});
});

router.post('/update', function(req, res, next){
    var item = {
        ClientName: req.body.client_name,
        ClientEmail: req.body.client_email,
        ClientMessage: req.body.client_message
    };
    
    var id = req.body.client_id;
    
    mongoClient.connect(url, function(err, db){
        assert.equal(null, err);
        db.collection('client-data').updateOne({'_id': ObjectId(id)}, {$set: item}, function(err, result){
            assert.equal(null, err);
            console.log('Item updated');
            db.close();
        });
    });
    
    res.redirect('/get-data');
});

router.delete('/delete', function(req, res, next){
    var id = req.body.id;
    
    mongoClient.connect(url, function(err, db){
        assert.equal(null, err);
        db.collection('client-data').deleteOne({'_id': ObjectId(id)}, function(err, result){
            assert.equal(null, err);
            console.log('Item deleted');
            db.close();
        });
    });
    
    res.redirect('/get-data');
});



router.get('/db_control', function(req, res, next) {
  res.render('db_store');
});



module.exports = router;

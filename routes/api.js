var mongoose = require('mongoose');
var fs = require('fs');
var crypto = require('crypto');
var model = require('./model.js');
mongoose.connect('mongodb://wmb:wmb@oceanic.mongohq.com:10035/nodejs'); //'mongodb://localhost/nodejs';

mongoose.connection.on('open', function() {
    console.log('Connected to: ' + mongoose.connections[0].host);
});

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.info('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

exports.findAllItems = function(req, res) {
    model.Item.find(function(err, items) {
        if (err) {
            res.send(err);
        }

        res.send(items);
    });
};

exports.findItemById = function(req, res) {
    model.Item.find({id: 0}, function(err, items) {
        if (err) {
            res.send(err);
        }

        res.send(items);
    });
};

exports.addItem = function(req, res) {
    mode.Item.create({
        text: req.body.text,
        val: req.body.val
    }, function(err) {
        if (err) {
            res.send(err);
        }
        res.send(201);

    });
};

exports.updateItem = function(req, res) {

};

exports.deleteItem = function(req, res) {

};

exports.addMap = function(req, res) {
    model.Map.create({
        name: req.body.name,
        city: req.body.city,
        country: req.body.country,
        region: req.body.region,
        scale: req.body.scale,
        location: {
            longTopLeft: req.body.location.longTopLeft,
            latTopLeft: req.body.location.latTopLeft,
            longBottomRight: req.body.location.longBottomRight,
            latBottomRight: req.body.location.latBottomRight
        }

    }, function(err) {
        if (err) {
            throw err;
            res.send(err);
        }
        res.send(201);

    });
};

exports.listMap = function(req, res) {
    model.Map.find(function(err, items) {
        if (err) {
            res.send(err);
        }

        res.send(items);
    });
};

exports.deleteMap = function(req, res) {
    model.Map.remove({_id: req.params.id}, function(err, items) {
        if (err) {
            throw err;
            res.send(err);
        }
        res.send(items);
    });
};

exports.updateMap = function(req, res) {
    var id = req.body._id;
    delete req.body._id;
    model.Map.update({id: id}, req.body, {upsert: true}, function(err) {
        if (err) {
            throw err;
            res.send(err);
        }
        res.send(201);
    });
};

exports.createUser = function(req, res) {
    model.User.create({
        username: req.body.username,
        email: req.body.email,
        password: crypto.createHash('md5').update(req.body.password).digest('hex')
    }, function(err) {
        if (err) {
            throw err;
            res.send(err);
        }
        res.send(201);
    });
};
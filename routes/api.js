var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/nodejs');
mongoose.connect('mongodb://wmb:wmb@oceanic.mongohq.com:10035/nodejs');

var Item = mongoose.model('Item', {
    text: String,
    val: Number
});

var Map = mongoose.model('Map', {
    name: String,
    country: String,
    city: String,
    region: String,
    scale: Number,
    location: {longTopLeft: Number, latTopLeft: Number, longBottomRight: Number, latBottomRight: Number}

    //location: [new mongoose.Schema({longTopLeft: Number, latTopLeft: Number}, {longBottomRight: Number, latBottomRight: Number}, {_id: false})]
});

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.info('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

exports.findAllItems = function(req, res) {
    Item.find(function(err, items) {
        if (err) {
            res.send(err);
        }

        res.send(items);
    });
};

exports.findItemById = function(req, res) {
    Item.find({id: 0}, function(err, items) {
        if (err) {
            res.send(err);
        }

        res.send(items);
    });
};

exports.addItem = function(req, res) {
    Item.create({
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
    console.dir(req.body);
    Map.create({
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
    Map.find(function(err, items) {
        if (err) {
            res.send(err);
        }

        res.send(items);
    });
};

exports.deleteMap = function(req, res) {
    console.dir(req.params.id);
    Map.remove({_id: req.params.id}, function(err, items) {
        if (err) {
            res.send(err);
        }

        res.send(items);
    });
};

exports.updateMap = function(req, res) {
   // console.dir(req);
    var id = req.body._id;
    delete req.body._id;
    Map.update({_id: id}, req.body, {upsert: true}, function(err) {
        if (err) {
            throw err;
            res.send(err);
        }
        res.send(201);

    });
    /*
    Map.up create({
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

    });*/
};
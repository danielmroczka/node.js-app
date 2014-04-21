var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');

var Item = mongoose.model('Item', {
    text: String,
    val: Number
});

exports.findAllItems = function (req, res) {
    Item.find(function (err, items) {
        if (err) {
            res.send(err);
        }

        res.send(items);
    })
};

exports.findItemById = function (req, res) {
    Item.find({id: 0}, function (err, items) {
        if (err) {
            res.send(err);
        }

        res.send(items);
    })
};

exports.addItem = function (req, res) {
    Item.create({
        text: 'test1',
        val: 111
    }, function (err) {
        if (err) {
            res.send(err);
        }
        res.send(201);

    });
}

exports.updateItem = function (req, res) {

}

exports.deleteItem = function (req, res) {

}
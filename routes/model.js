var mongoose = require('mongoose');

exports.Item = mongoose.model('Item', {
    text: String,
    val: Number
});

exports.Map = mongoose.model('Map', {
    name: String,
    country: String,
    city: String,
    region: String,
    scale: Number,
    location: {
        longTopLeft: Number,
        latTopLeft: Number,
        longBottomRight: Number,
        latBottomRight: Number},
    img: {data: Buffer, contentType: String, url: String}
});

exports.User = mongoose.model('User', {
    username: String,
    email: String,
    password: String
});
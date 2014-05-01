var express = require('express'),
    path = require('path'),
    http = require('http'),
    api = require('./routes/api');
    
var app = module.exports = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.logger('dev'));
    /* app.use(express.bodyParser()); */
    app.use(express.json());
    app.use(express.urlencoded());
    
    app.use(express.methodOverride());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(app.router);
});

//Items
app.get('/api/items', api.findAllItems);
app.get('/api/item/:id', api.findItemById);
app.post('/api/items', api.addItem);
app.put('/api/items/:id', api.updateItem);
app.delete('/api/items/:id', api.deleteItem);

//Map
app.get('/api/maps', api.listMap);
app.post('/api/maps', api.addMap);
app.delete('/api/maps/:id', api.deleteMap);
app.put('/api/maps/', api.updateMap);

//User
app.post('/api/users', api.createUser);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
}); 
var express = require('express'),
    path = require('path'),
    http = require('http'),
    api = require('./routes/api');

var app = module.exports = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3001);
    /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.logger('dev'));
    /* app.use(express.bodyParser()); */
    app.use(express.json());
    app.use(express.urlencoded());
    
    app.use(express.methodOverride());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(app.router);
});

app.get('/api/items', api.findAllItems);
app.get('/api/item/:id', api.findItemById);

app.post('/api/items', api.addItem);
app.put('/api/items/:id', api.updateItem);
app.delete('/api/items/:id', api.deleteItem);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
}); 
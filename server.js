var express = require('express'),
    path = require('path'),
    http = require('http'),
    routes = require('./routes'),
    api = require('./routes/api');


var app = module.exports = express();

//app.configure(function () {
    app.set('port', process.env.PORT || 3001);
    app.use(express.logger('dev'));
    /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    //app.use( express.static(__dirname, '/public'));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(app.router);
//});

app.get('/api/items', api.findAllItems);
app.get('/api/item/:id', api.findItemById);

app.post('/api/items', api.addItem);
app.put('/api/items/:id', api.updateItem);
app.delete('/api/items/:id', api.deleteItem);

//app.get('/', routes.index);
app.get('*', routes.index);


http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
}); 
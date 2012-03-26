/**
 * Module dependencies.
 */

var express = require('express'),
    einser = require('./routes/eins'),
    routes = require('./routes/index');

var app = module.exports = express.createServer();

// Configuration
app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get("/eins", routes.eins);
app.get("/1", einser.eins);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

console.log('routes.eins is '+ routes.eins);
console.log('routes.index is '+ routes.index);
console.log('einser.eins is '+ einser.eins);

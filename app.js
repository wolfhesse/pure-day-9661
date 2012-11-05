/**
 * Module dependencies.
 */

var express = require('express'),
    routes_one = require('./routes/eins'),
    routes_index = require('./routes/index');

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
app.get('/', routes_index.index);
app.get("/eins", routes_index.eins);
app.get("/zwo", routes_index.zwo);
app.get("/1", routes_one.eins);
app.get("/2", routes_one.zwo);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

console.log('routes_index.eins is ' + routes_index.eins);
console.log('routes_index.index is ' + routes_index.index);
console.log('routes_one.eins is ' + routes_one.eins);
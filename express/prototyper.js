var express = require('express');

var app = express();

var http = require('http');

// set up handlebars view engine
var handlebars = require('express-handlebars')
  .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// static files
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
  if(!res.locals.partials) res.locals.partials = {};
  res.locals.partials.puzzleData = getSetData();
  next();
});

app.get('/', function(req, res) {
  res.render('home');
});

// 404 page
app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.listen(app.get('port'), function() {
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});

function getSetData() {
    return {
        puzzle_id: 13082,
        version: 1,
        puzzle_data: [
            {
            "color": "red",
            "shape": "diamond",
            "pattern": "solid",
            "number": 1
            },
            {
            "color": "red",
            "shape": "diamond",
            "pattern": "solid",
            "number": 2
            },
            {
            "color": "red",
            "shape": "diamond",
            "pattern": "striped",
            "number": 2
            },
            {
            "color": "red",
            "shape": "diamond",
            "pattern": "empty",
            "number": 1
            },
            {
            "color": "green",
            "shape": "diamond",
            "pattern": "striped",
            "number": 2
            },
            {
            "color": "green",
            "shape": "diamond",
            "pattern": "striped",
            "number": 3
            },
            {
            "color": "green",
            "shape": "diamond",
            "pattern": "empty",
            "number": 3
            },
            {
            "color": "purple",
            "shape": "diamond",
            "pattern": "solid",
            "number": 3
            },
            {
            "color": "purple",
            "shape": "diamond",
            "pattern": "empty",
            "number": 2
            }
        ],
        difficulty: "Easy",
        published: "2015-12-06 18:00:00",
        print_date: "2015-12-07",
        day_of_week: "Monday"
        };
}
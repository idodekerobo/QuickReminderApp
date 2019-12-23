const express = require('express');
const path = require('path');

// INIT EXPRESS
const app = express();
// INIT PORT constant
const PORT = process.env.PORT || 5000;

// INIT EJS
app.set('views', path.join(__dirname, 'views')); // so node looks inside views folder for templates
app.set('view engine', 'ejs'); // set view engine template to ejs


// SERVE STATIC JS/CSS FILES
app.use('/public/js/index.js', express.static(path.join(__dirname, '/public/js/index.js')));
app.use('/public/css/index.css', express.static(path.join(__dirname, '/public/css/index.css')));


// ENDPOINTS
app.get('/', function(req, res) {
    res.render('index');
});

// LISTEN ON PORT
app.listen(PORT, function() {
    console.log('Daily To Do server started on ' + PORT);
});


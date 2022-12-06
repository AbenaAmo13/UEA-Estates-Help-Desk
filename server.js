//Code will be executed in strict mode
'use strict';

//Imports for node modules

const os= require('os')

const express = require('express');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

//Constant for the express app
const app = express();

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
//Redirect HTTP to HTTPS,
app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

//Handle requests for static files
app.use(compression());
app.use(express.static('public'));



//Function to begin the server
function startServer() {

    app.get('/', function (req, res) {
        var options = {
            root: path.join(__dirname)
        };
        res.sendFile('index.html', options);
    });

 /*  app.post('/report_form', (req, res)=>{
        console.log(req.body);
        fs.writeFile('./reports.json', JSON.stringify(req.body), 'utf8', (err)=>{
        })
       res.send();


   })
*/
    /*
    app.get('/getData', (req, res)=>{
        //Reads the json file, and send the json objects /binaries to the client side.
        res.send((fs.readFileSync('reports.json')))
    })*/

    app.use((req, res, next) => {
        res.status(404);
        console.log("Page not found");
        res.render('error', {
            title: "Error"
        })
    });

    //Start the server on PORT 8080
    app.listen(process.env.PORT || 8080, function () {
        console.log("Express server listening on port %d in %s mode",
            this.address().port,
            app.settings.env
        );
    });
}

//Start the server
startServer();
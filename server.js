var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
var app = express();
app.use(morgan('combined'));


var articles= {
     article1 :{
        title: 'Article-1 | aishwarya',
        heading: 'Article One',
        date: '19-08-2017',
        content: `
         <p>
                      This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.
                      This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph
                  </p>
                  <p>
                      This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.
                      This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph
                  </p>
                  <p>
                      This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.
                      This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph
                  </p>
                  `
        
    },
     article2 :{
          title: 'Article-2 | aishwarya',
        heading: 'Article Two',
        date: '18-08-2017',
        content: `
         <p>
                      This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.
                      This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph
                  </p>
                 
                  `
        
     },
     article3 :{
          title: 'Article-3 | aishwarya',
        heading: 'Article Three',
        date: '20-08-2017',
        content: `
         <p>
                      This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.
                      This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph
                  </p>
                 
                  `
        
     }
}; 
function createTemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate= `
            <html>
        <head>
            <title>
               ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
          <div>
              <a href="/">HOME</a>
          </div>
          <hr/>
          <h3>
              ${heading}
          </h3>
          <div>
              ${date}
          </div>
          <div class="container">
              <div>
                 ${content}
              </div>
          </div>
        </body>
     </html>`
    ;
  return htmlTemplate;
}        
    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input, salt) {
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return hashed.toString('oct');
}

app.get('/hash/:input', function (req,res) {
   var hashedString= hash(req.params.input, 'This is some random string');
res.send(hashedString);
});


var counter=0;
app.get('/counter', function(req,res) {
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function(req, res) {
    //articleName == articleOne
    //articles[articleName] == {} contents for article one 
     var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

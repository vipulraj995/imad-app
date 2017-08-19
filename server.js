var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne ={
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

app.get('/article1', function(req, res) {
     res.send(createTemplate(articleOne));
});

app.get('/article2', function(req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});

app.get('/article3', function(req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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

var http = require("http");
var path = require("path");
var fs = require("fs");
var nameFileDB = 'DB.txt';
var checkMimeType = true;
var port = 8000;
var s = http.createServer();

s.on('request', function (req, res) {
    var data = '';

    req.on('data', function (chunk) {
        data += chunk.toString();
    });

    req.on('end', function () {
        var now = new Date();
        var filename = req.url || "index.html";

        filename = filename === '/' ? "/index.html" : filename;

        if (filename === '/getBooks') {
            onGetBooks(res);
            return;
        }

        if (filename === '/rateBook') {
            onRateBook(res, data);
            return;
        }

        if (filename === '/addBook') {
            onAddBook(res, data);
            return;
        }

        var ext = path.extname(filename);
        var localPath = __dirname;
        var validExtensions = {
            ".html": "text/html",
            ".js": "application/javascript",
            ".css": "text/css",
            ".txt": "text/plain",
            ".jpg": "image/jpeg",
            ".gif": "image/gif",
            ".png": "image/png",
            ".woff": "application/font-woff",
            ".woff2": "application/font-woff2",
            ".otf": "application/x-font-otf"
        };

        var validMimeType = true;
        var mimeType = validExtensions[ext];

        if (checkMimeType) {
            validMimeType = validExtensions[ext] != undefined;
        }

        if (validMimeType) {
            localPath += filename.replace(/%20/g, ' ');
            fs.exists(localPath, function (exists) {
                if (exists) {
                    console.log("Serving file: " + localPath);
                    getFile(localPath, res, mimeType);
                } else {
                    console.log("File not found: " + localPath);
                    res.writeHead(404);
                    res.end();
                }
            });

        } else {
            console.log("Invalid file extension detected: " + ext + " (" + filename + ")")
        }
    });
});

s.listen(port);

function getFile(localPath, res, mimeType) {
    fs.readFile(localPath, function (err, contents) {
        if (!err) {
            res.setHeader("Content-Length", contents.length);
            if (mimeType != undefined) {
                res.setHeader("Content-Type", mimeType);
            }
            res.statusCode = 200;
            res.end(contents);
        } else {
            res.writeHead(500);
            res.end();
        }
    });
}

function getBooksFromDB(callback) {
    fs.readFile(nameFileDB, function (err, contents) {
        var contents = contents.toString() || '[]';
        if (err) {
            throw err;
        }
        callback(JSON.parse(contents));
    });
}

function setBooksIntoDB(data, callback) {
    var json = JSON.stringify(data);
    fs.writeFile(nameFileDB, json, function (error) {
        if(callback){
            callback(error);
        }
    });
}

function onGetBooks(res) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    getBooksFromDB(function (books) {
        res.end(JSON.stringify(books));
    });
}

function onRateBook(res, data) {
    console.log(data);
    var objData = JSON.parse(data);
    var result = { response: false };

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    if (objData.idBook >= 0 && isValidStar(parseFloat(objData.stars))) {
        getBooksFromDB(function (books) {
            for (var i = 0; i < books.length; i++) {
                if (books[i].idBook == objData.idBook) {
                    books[i].stars = objData.stars;
                    result.response = true;
                    setBooksIntoDB(books);
                    break;
                }
            }
            res.end(JSON.stringify(result));
        });
    }
}

function onAddBook(res, data) {
    var objData = JSON.parse(data);
    var result = { response: false };
    var newBook = {
        title: objData.title || '', 
        author: objData.author || '', 
        image: objData.image || '', 
        stars: objData.stars || 0, 
        section: objData.section || 'Must Read Titles', 
        price: objData.price || 0};
console.log(
    "newBook.title.length > 0", newBook.title.length > 0
);
console.log(
    "newBook.author.length > 0", newBook.author.length > 0
);
console.log(
    "isValidImageSrc(newBook.image)", isValidImageSrc(newBook.image)
);
console.log(
    "isValidStar(newBook.stars)", isValidStar(newBook.stars)
);
    if(newBook.title.length > 0 && 
    newBook.author.length > 0 && 
    isValidImageSrc(newBook.image) &&
    isValidStar(newBook.stars)
    ){
        getBooksFromDB(function (books) {
            var index = -1;

            books.forEach(function(el, i){
                index = el.idBook > index ? el.idBook : index;
            });
            newBook.idBook = index+1;
            books.push(newBook);
            setBooksIntoDB(books, function(err){
                if(!err){
                    result.response = true;
                    result.idBook = newBook.idBook;
                }

                res.end(JSON.stringify(result));
            });
        });
    } else{
        res.end(JSON.stringify(result));
    }
}

function isValidStar(star){
    var arr = [0, 1, 2, 3, 4, 5, 0.5, 1.5, 2.5, 3.5, 4.5, 5];
    return arr.indexOf(star) >= 0;
}

function isValidImageSrc(src){
    return /.+(\.(jpg|jpeg|png|gif))$/.test(src);
}

console.log("Starting web server at localhost:" + port);
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var mv = require('mv');

http.createServer(function(req, res) {

  // kirim form upload
  if (req.url === "/" && req.method === "GET") {
    fs.readFile("form_upload.html", (err, data) => {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      if (err) throw err;
      res.end(data);
    });
  }

  // upload file
  if (req.url == '/' && req.method === "POST") {
    // membuat objek form dari formidable
    var form = new formidable.IncomingForm();

    // manangani upload file
    form.parse(req, function(err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = __dirname + "/uploads/" + files.filetoupload.name;

      // pindahakan file yang telah di-upload
      mv(oldpath, newpath, function(err) {
        if (err) {
          throw err;
        }
        console.log('file uploaded successfully');
        return res.end("file uploaded successfully");
      });
    });
  }

}).listen(8000);

console.log("server listening on http://localhost:8000");

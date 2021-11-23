const http = require('http');
const fs = require('fs');
const port = 3000;

const renderHTML = (path)

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type' : 'text/html'
  });
  const url = req.url;
  if(url === '/about'){
    fs.readFile('./about.html', (err, data) => {
      if(err){
        res.writeHead(404);
        res.write('File not found')
      }else{
        res.write(data);
      }
      res.end();
    })
  }else if(url === '/contact'){
    res.write('<h1>Ini adalah halaman about</h1>')
  }else{
    fs.readFile('./index.html', (err, data) => {
      if(err){
        res.writeHead(404);
        res.write('File not found')
      }else{
        res.write(data);
      }
      res.end();
    })
  }
})

.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
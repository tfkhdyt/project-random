var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello dari Petanikode!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

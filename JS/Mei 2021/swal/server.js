const express = require('express');
// const path = require('path');
const swal = require('sweetalert');
const app = express();

app.use(express.static(__dirname+'/public'));

app.listen(5000, console.log('Server is running on port 5000'));

const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
 
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});



app.listen(port, () => console.log(`Listening on port ${port}...`));

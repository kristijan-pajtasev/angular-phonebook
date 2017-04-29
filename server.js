let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
    console.log('Coding exercise app listening on port 3000!')
});
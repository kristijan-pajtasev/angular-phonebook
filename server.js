let express = require('express');
let app = express();
let phonebook = require("./data/phonebook.json");

app.use(express.static(__dirname + '/public'));

app.get("/phonebook/:id", (request, response) => {
    let id = request.params.id;
    let contact = phonebook.filter(e => e.id == id)[0];
    if(!contact) {
        response.status(404);
        response.send("Contact not found");
    } else {
        response.send(phonebook);
    }
});

app.get("/phonebook", (request, response) => {
    response.send(phonebook);
});

app.listen(3000, function () {
    console.log('Coding exercise app listening on port 3000!')
});
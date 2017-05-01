let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let phonebook = require("./data/phonebook.json");
let id = 1

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/phonebook/:id", (request, response) => {
    let id = request.params.id;
    let contact = phonebook.filter(e => e.id == id)[0];
    if(!contact) {
        response.status(404);
        response.send("Contact not found");
    } else {
        response.json(phonebook);
    }
});

app.get("/phonebook", (request, response) => {
    response.json(phonebook);
});

app.post("/phonebook", (request, response) => {
    //TODO extract latest id from json
    id = id + 1
    request.body.id = id
    phonebook.push(request.body)

    response.send("OK");
});

app.listen(3000, function () {
    console.log('Coding exercise app listening on port 3000!')
});

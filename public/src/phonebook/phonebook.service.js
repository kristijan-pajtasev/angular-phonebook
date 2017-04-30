let $http;
class PhonebookService {
    constructor(_$http_) {
        $http = _$http_;
    }

    getAll(res, rej) {
        $http.get("mocks/phonebook.json").then((data) => {
            res(data.data);
        });
    }

    get(id, res, rej) {
        $http.get("mocks/phonebook.json").then((data) => {
            let contact = data.data.filter(e => e.id === id)[0];
            if(!contact) rej(`Contact with ${id} does not exist.`);
            else res(contact);
        });
    }
}

PhonebookService.$inject = ["$http"];

angular.module("phonebook").service("PhonebookService", PhonebookService);
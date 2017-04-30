let $http;
class PhonebookService {
    constructor(_$http_) {
        $http = _$http_;
    }

    getAll(res, rej) {
        $http.get("phonebook").then((data) => {
            res(data.data);
        });
    }

    get(id, res, rej) {
        $http.get(`phonebook/${id}`).then((data) => {
            res(data.data);
        }, () => {
            rej(`Contact with ${id} does not exist.`);
        });
    }
}

PhonebookService.$inject = ["$http"];

angular.module("phonebook").service("PhonebookService", PhonebookService);
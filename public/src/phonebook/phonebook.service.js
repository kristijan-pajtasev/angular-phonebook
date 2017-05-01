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

    postContact(data, res, rej) {
        $http.post('/phonebook', data).then(
            postResponse => {
                if (postResponse.data) { res("Post Data Submitted Successfully!"); }
            },
            postResponse => {
                rej("Service does not exist");
            });
    }
}

PhonebookService.$inject = ["$http"];

angular.module("phonebook").service("PhonebookService", PhonebookService);

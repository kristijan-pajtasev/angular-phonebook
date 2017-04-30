class PhonebookService {
    constructor() {

    }

    getAll(res, rej) {
        return new Promise(() => {
            res([]);
        })
    }

    get(id, res, rej) {
        return new Promise(() => {
            res({});
        })
    }
}

angular.module("phonebook").service("PhonebookService", PhonebookService);
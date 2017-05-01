class PhonebookController {
    constructor(PhonebookService, $scope) {
        this.model = {};
        this.PhonebookService = PhonebookService;
        this.getContacts();
    }

    postContact () {
        let contactData = this.model;
        let _this = this;
        this.PhonebookService.save(contactData, res => {
            _this.msg = res;
            _this.model = {};
            _this.getContacts();
        }, rej => {
            _this.msg = rej;
        });
    };

    getContacts() {
        let _this = this;
        this.PhonebookService.getAll(jsonData => {
            _this.contacts = jsonData;
        });
    }
}

PhonebookController.$inject = ["PhonebookService", "$scope"];

angular.module('phonebook').controller("PhonebookController", PhonebookController);

angular.module('phonebook').controller("PhonebookController", ["PhonebookService", "$scope", function(PhonebookService, $scope) {
    $scope.model = {};

    getContacts();

    $scope.postContact = function () {

        let contactData = $scope.model;

        PhonebookService.save(contactData, res => {
            $scope.msg = res;
            $scope.model = {};
            getContacts();
        }, rej => {
            $scope.msg = rej;
        });
    };

    function getContacts() {
        PhonebookService.getAll(jsonData => {
            $scope.contacts = jsonData;
        });
    }
}]);

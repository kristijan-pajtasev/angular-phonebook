angular.module('phonebook').controller("PhonebookController", ["PhonebookService", "$scope", function(PhonebookService, $scope) {
    PhonebookService.getAll(jsonData => {
        $scope.contacts = jsonData;
    });

    $scope.postContact = function (firstName, lastName, phoneNumber) {
    var contactData = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
    };

    PhonebookService.postContact(contactData, res => {
            $scope.msg = res;
        }, rej => {
            $scope.msg = rej;
        });
    };
}]);

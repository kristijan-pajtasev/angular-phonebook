angular.module('phonebook').controller("PhonebookController", ["PhonebookService", "$scope", function(PhonebookService, $scope) {
    PhonebookService.getAll(jsonData => {
        $scope.Contacts = jsonData;
    });
}]);

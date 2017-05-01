angular.module('phonebook').controller("PhonebookController", ["PhonebookService", "$scope", function(PhonebookService, $scope) {
    PhonebookService.getAll(data => {
        $scope.Data = data;
    });
}]);

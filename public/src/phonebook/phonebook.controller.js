angular.module('phonebook').controller("PhonebookController", ["PhonebookService", function(PhonebookService) {
    $scope.Name = PhonebookService
    console.log(PhonebookService)
}]);

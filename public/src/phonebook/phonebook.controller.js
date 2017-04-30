angular.module('phonebook').controller("PhonebookController", ["PhonebookService", "$scope", function(PhonebookService, $scope) {
    $scope.Name = "test"
    console.log(PhonebookService)
}]);

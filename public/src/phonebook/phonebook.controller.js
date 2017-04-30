angular.module('phonebook').controller("PhonebookControoler", ["PhonebookService", function(PhonebookService) {
    $scope.Name = PhonebookService
    console.log(PhonebookService)
}]);

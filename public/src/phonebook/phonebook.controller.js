angular.module('phonebook').controller("PhonebookController", ["PhonebookService", "$scope", "$http", function(PhonebookService, $scope, $http) {
    PhonebookService.getAll(jsonData => {
        $scope.contacts = jsonData;
    });

    $scope.postContact = function (firstName, lastName, phoneNumber) {
    var data = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
    };

    $http.post('/phonebook', JSON.stringify(data)).then(function (response) {
        if (response.data)
            $scope.msg = "Post Data Submitted Successfully!";
        }, function (response) {
            $scope.msg = "Service does not exist";
        });
    };
}]);

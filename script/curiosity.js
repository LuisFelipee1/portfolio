const app = angular.module('my-portfolio', []);

app.controller('curiosityController', function ($scope, $element) {
    $scope.goToHome = () => {
        location.href = '../index.html';
    }
});
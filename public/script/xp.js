const app = angular.module('my-portfolio', []);

app.controller('xpController', function ($scope, $element) {
    $scope.goToHome = () => {
        location.href = '../index.html';
    }
});
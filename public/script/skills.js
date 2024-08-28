//const app = angular.module('skillsController', []);

app.controller('skillsController', function ($scope, $element) {
    $scope.goToHome = () => {
        location.href = '../index.html';
    }
});
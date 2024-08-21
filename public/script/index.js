const app = angular.module('my-portfolio', []);

app.controller('homeController', function ($scope) {
    $scope.activee = false;
    $scope.content_side_bar = "☰";

    $scope.openMenu = function () {
        $scope.activee = !$scope.activee;
        $scope.content_side_bar = $scope.activee ? "X" : "☰";
    };
});

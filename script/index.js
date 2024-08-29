const app = angular.module('my-portfolio', []);

app.controller('homeController', function ($scope) {
    $scope.activee = false;
    $scope.content_side_bar = "☰";

    $scope.openMenu = function () {
        $scope.activee = !$scope.activee;
        $scope.content_side_bar = $scope.activee ? "X" : "☰";
    };

    $scope.goToProjects = () => {
        location.href = '../projects.html';
    }

    $scope.goToSkills = () => {
        location.href = '../skills.html';
    }

    $scope.goToXp = () => {
        location.href = '../xp.html';
    }

    $scope.goToCuriosity = () => {
        location.href = '../curiosity.html';
    }
});

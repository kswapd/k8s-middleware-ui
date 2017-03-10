angular.module('app').controller("LoginController", ["$scope", "Kong", "Alert", "$location", function ($scope, Kong, Alert, $location) {
    $scope.config = angular.copy(Kong.config);

    var first_setup = !$scope.config.url;
    $scope.config.showOther = false;
    $scope.update = function() {
        if (!$scope.config.url) {
            $scope.config.url = "http://localhost:8001";
        }
        if ($scope.config.url.toLowerCase().indexOf("http") == -1) {
            $scope.config.url = "http://" + $scope.config.url;
        }

        Kong.setConfig($scope.config).then(function() {
            $scope.config.showOther = true;
            /*if (first_setup) {
                $location.path('/');
                first_setup = false;
            } else */
            {
                // celebrate
                Alert.success('Saved!');
                $location.path('/');
            }
        });
    }
}]);

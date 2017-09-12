(function() {
  'user strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$injector = ['$scope']
  function LunchCheckController($scope) {
    $scope.lunchList = "";
    $scope.message = "";
    $scope.checkLunch = function() {
      $scope.message = "";
      if ($scope.lunchList == "" || $scope.lunchList == " ") {
        $scope.message = "Please enter data first";
      } else {
        var arrayOfLunch = $scope.lunchList.split(",");

        if (arrayOfLunch.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }
    }
  }
})();

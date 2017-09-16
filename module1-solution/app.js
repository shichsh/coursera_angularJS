(function() {
  'user strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$injector = ['$scope']
  function LunchCheckController($scope) {
    $scope.lunchList = "";
    $scope.message = "";
    console.log($scope.$watch);
    $scope.checkLunch = function() {
      $scope.message = "";
      if ($scope.lunchList == "" || $scope.lunchList == " ") {
        $scope.message = "Please enter data first";
      } else {
        var arrayOfLunch = $scope.lunchList.split(",");
        var output = angular.element(document.querySelector("#message"));
        if (arrayOfLunch.length <= 3) {
          $scope.message = "Enjoy!";
          output[0].style.color = "red";
        } else {
          $scope.message = "Too much!";
          output[0].style.color = "gr";
        }
      }
    }
  }
})();

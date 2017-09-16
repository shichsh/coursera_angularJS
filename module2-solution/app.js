(function() {
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService', '$scope'];
  function ToBuyController(ShoppingListCheckOffService, $scope) {
    var toBuy = this;
    toBuy.check = ShoppingListCheckOffService.isToBuyListEmpty();
    toBuy.lists = ShoppingListCheckOffService.getToBuyList();
    toBuy.buyItem = function(index) {
      ShoppingListCheckOffService.removeItem(index);
    };
    toBuy.isListEmpty = ShoppingListCheckOffService.isToBuyListEmpty;
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.boughtLists = ShoppingListCheckOffService.getBoughtList();
    bought.isListEmpty = ShoppingListCheckOffService.isBoughtListEmpty;
  };

  function ShoppingListCheckOffService() {
    checkOff = this;
    var toBuyList = [{name: "cookies", quantity: 5}, {name: "milk", quantity: 3},
                  {name: "apples", quantity: 10}, {name: "pizza", quantity: 6},
                  {name: "corn", quantity: 8}];
    var boughtList = [];

    checkOff.getToBuyList = function() {
      return toBuyList;
    };

    checkOff.getBoughtList = function() {
      return boughtList;
    };

    checkOff.isBoughtListEmpty = function() {
      return boughtList.length === 0;
    };

    checkOff.isToBuyListEmpty = function() {
      return toBuyList.length === 0;
    };

    checkOff.removeItem = function(index) {
      boughtList.push(toBuyList[index]);
      toBuyList.splice(index, 1);
    };
  }
})();

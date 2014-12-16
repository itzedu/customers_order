// Customers Controller
myApp.controller('CustomersController', function($scope, customerFactory){
    $scope.errors = "";
    $scope.customers = customerFactory.getCustomers();
    $scope.addCustomer = function(){
        $scope.errors = customerFactory.addCustomer($scope.newCustomer.name);
    };
    $scope.removeCustomer = function($index){
        customerFactory.removeCustomer($index);
    };
});

// Orders Controller
myApp.controller('OrdersController', function($scope,customerFactory,orderFactory){
    $scope.errors2 = "";
    $scope.customers = customerFactory.getCustomers();
    $scope.products = orderFactory.getProducts();
    $scope.orders = orderFactory.getOrders();
    $scope.addOrder = function(){
        $scope.errors2 = orderFactory.addOrder($scope.newOrder);
    };
});
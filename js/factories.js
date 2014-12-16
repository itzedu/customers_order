// orderFactory
myApp.factory('orderFactory', function(){
    var products = [
        {name: 'Nike Shoes'},
        {name: 'iPhone'},
        {name: 'Rolex Watch'},
        {name: 'Macbook Pro'},
        {name: 'Coding Dojo Sweater'}
    ];
    var orders = [];
    var factory = {};

    factory.getProducts = function(){
        return products;
    }

    factory.getOrders = function(){
        return orders;
    }

    factory.addOrder = function(new_order){
        var this_order = {};
        var current_date = new Date();
        this_order.customer_name = new_order.customer_name.name;
        this_order.quantity = new_order.quantity;
        this_order.product_name = new_order.product_name.name;
        this_order.date = current_date;
        if (this_order.customer_name == null || this_order.quantity == "" || this_order.product_name == null){
            return "All fields must be selected"
        }
        orders.push(this_order);
    }
    return factory;
});

// customerFactory
myApp.factory('customerFactory', function(){
    var customers = [];
    var factory = {};
    
    factory.getCustomers = function(){
      return customers;
    }
  
    factory.addCustomer = function(new_customer) {
        var new_user = {};
        var current_date = new Date();
        new_user.name = new_customer;
        new_user.created_at = current_date;
        
        for(i in customers) {
            if(customers[i]['name'] == new_customer) {
                return "The user already exists";
            }
        }
        if(new_user.name == '') {
            return "Write something";
        }
        customers.push(new_user);
    }

    factory.removeCustomer = function(index) {
        customers.splice(index, 1);
    }
    return factory;
});
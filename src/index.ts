import { FinanceCalculator, OrderManagement, Validator } from "app";

  
  const orders = [
    { id: 1, item: "Sponge", price: 15 },
    { id: 2, item: "Chocolate", price: 20 },
    { id: 3, item: "Fruit", price: 18 },
    { id: 4, item: "Red Velvet", price: 25 },
    { id: 5, item: "Coffee", price: 8 },
  ];
 const ordermanagement = new OrderManagement (new Validator(),new FinanceCalculator());
 for (const order of orders) {
    ordermanagement.addOrder( order.item, order.price);
  }
  console.log("Orders:", ordermanagement.getOrders());
  
  
  console.log("Orders after adding a new order:", orders);
  
  // Calculate Total Revenue directly
  console.log("Total Revenue:",ordermanagement.getTotaleRevenue());
  
  // Calculate Average Buy Power directly
  console.log("Average Buy Power:", ordermanagement.getAverageRevenue());
  
  // Fetching an order directly
  const fetchId = 2;
  console.log("Order with ID 2:", ordermanagement.getOrder(fetchId));
  
  // Attempt to fetch a non-existent order
  const nonExistentId = 10;
  const nonExistentOrder = ordermanagement.getOrder(nonExistentId);
  console.log("Order with ID 10 (non-existent):", nonExistentOrder);
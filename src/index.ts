import { FinanceCalculator, OrderManagement, Validator } from "./app";
import logger from "./util/logger";
 // ./ mn matra7 mou 2nta mwjoud balch fatech 3ly 
  const orders = [
    { id: 1, item: "Sponge", price: 15 },
    { id: 2, item: "Chocolate", price: 10 },
    { id: 3, item: "Fruit", price: 10},
    { id: 4, item: "Red Velvet", price: 25 },
    { id: 5, item: "Coffee", price: 8 },
  ];
 const ordermanagement = new OrderManagement (new Validator(),new FinanceCalculator());
 for (const order of orders) {
    ordermanagement.addOrder( order.item, order.price);
  }
  // adding new order direcly
const newItem="Birthday";
const newPrice=20;
ordermanagement.addOrder(newItem,newPrice);


  logger.info("Orders:" +ordermanagement.getOrders());
  // badal ma 2tba3 bl consol sort 3am 2tba3 be file 
  
  logger.info("Orders after adding a new order:"+ orders);
  
  // Calculate Total Revenue directly
  logger.info("Total Revenue:"+ordermanagement.getTotaleRevenue());
  
  // Calculate Average Buy Power directly
  logger.info("Average Buy Power:"+ordermanagement.getAverageRevenue());
  
  // Fetching an order directly
  const fetchId = 2;
  const fetchedOrder = ordermanagement.getOrder(fetchId);

  logger.info("Order with ID 2:%o",fetchedOrder);
  
  // Attempt to fetch a non-existent order
  const nonExistentId = 10;
  const nonExistentOrder = ordermanagement.getOrder(nonExistentId);
  logger.info("Order with ID 10 (non-existent):"+nonExistentOrder);
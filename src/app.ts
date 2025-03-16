//single resposability 3mlna la kel class y3ml 7aga wa7da w 3mlna class 3la el validation w 3la el finance w 3la el order management




interface Order {
  price: number;
  id: number;
  item: string;
}


export class OrderManagement {
constructor (private validator:IValidator, private calculator: ICalculator){
// klche mn bara b7oto bl constractor hek ma boun 3am bjbour l methods bl class 
//ys3mlo hay depencies ymken koun bade 8yer bl dependcies se3tha b8yer bl constracteurs 

}
private orders: Order[] = [];
  getOrders(){
return this.orders;
  }
  public  addOrder(item : string, price: number){
   const order:Order={id: this.orders.length +1, price,item};
   //hon closed for modifications 
  // new Validator().validate(order);
  //////////////////
  ///hon lma ma bade 2a3mel instance w2njber fe bst3mel DI
  //hon feha tkoun ma 3am ta3mel che 
this.validator.validate(order)
    this.orders.push( order);      
  }
  getOrder(id:number){
    return this.orders.find(order => order.id === id);
  }
getTotaleRevenue(){
return this.calculator.getRevenue(  this.orders)
}
getAverageRevenue(){
return this.calculator.getAverageRevenue(this.orders)
}


}
export class premuimOrderManagemenet extends OrderManagement{
//liskov substitution principle 2za st5dmna el class epremuimOrderManagemenet w 3mlna override ll method getOrder ma  la7 y2ser 2za badlna l ordermanagement fe el app.ts
getOrder(id: number): Order | undefined {
  console.log("Fetching order with ID", id);
  return super.getOrder(id);
}
}


/////////////

interface IValidator {
  validate(order:Order ): void;
}
//hon mntbe2 interface segregation principle 
interface IpossibleItems {
  possibleItems: string[];}

 export class Validator implements IValidator{
  // this open for extntion every time add new extntion in this array 
  private rules : IValidator[]=[
new PriceValidator(),
new ItemValidator(),
new MaxPriceValidator()


  ]

  
  public validate(order: Order)  {
    for (const rule of this.rules) {
      rule.validate(order);
    }
    
    
  }
  
}

    
    
class ItemValidator implements IValidator, IpossibleItems {
  private static possibleItems = [
    "Sponge",
    "Chocolate",
    "Fruit",
    "Red Velvet",
    "Birthday",
    "Carrot",
    "Marble",
    "Coffee",
  ];

  public validate(order: Order) {
    if (!ItemValidator.possibleItems.includes(order.item)) {
      throw new Error(`Invalid item. Must be one of: ${ItemValidator.possibleItems.join(", ")}`);
    };
  }

  public get possibleItems() {
    return ItemValidator.possibleItems;
  }
}


   class PriceValidator implements IValidator {
        public validate(order: Order) {
        
          if (order.price < 0) {
            throw new Error("Price must be positive");
          }
        }}

class MaxPriceValidator implements IValidator {
  public validate(order: Order) {
    if (order.price > 100) {
      throw new Error("Price must be less than 100");
    
}}}








interface ICalculator {
getRevenue(Orders:Order[]):number;
getAverageRevenue(Orders:Order[]):number;

}


export  class FinanceCalculator implements ICalculator{
public  getRevenue(orders: Order[]) {
  
  return orders.reduce((total, order) => total + order.price, 0);}
  
 public  getAverageRevenue(orders: Order[]) {
    return orders.length === 0 ? 0 : this.getRevenue(orders) / orders.length;
  }
}
 

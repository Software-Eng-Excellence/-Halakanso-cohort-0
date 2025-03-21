import  {OrderManagement, Validator,FinanceCalculator } from '../src/app';
describe('OrderManagement', () => { 
    interface Order {
        price: number;
        id: number;
        item: string;
      }
      
    let validator: Validator;
    let call : FinanceCalculator;
    //let vali : Validator;
    let orderManagement : OrderManagement;
    let basevalidatior :(order : Order )=>void ;
    //function basevalidator bt5od order btrod void 
    beforeAll(() => {
        validator=new Validator();
      // fena na3mel hek bas hed che by5od wa2t bl cho8l  vali = new Validator();
      //kerml hek  3mlna basevalidatior 3shan n5od el function eli 3mleha override
      //w n5odha w n3melha restore 3shan n5alas 3al function eli 3mleha override 
      call=new FinanceCalculator();

        
    });
    beforeEach(() => {
        basevalidatior=Validator.validate;
        Validator.validate=jest.fn();
// mn jest.fn() fena na3ref 2za orderManagement 3aytet lal validator fene chouf 
// l values le feha nafes spy w fene 2a3mel mock return give an value 
 orderManagement =new OrderManagement(validator,call);
 
    });
    afterEach(() => {
        Validator.validate=basevalidatior;
    });

    it("should add order" , ()=>{
//arrange
const item ="Sponge";
const price= 15;
// Act 
orderManagement.addOrder(item,price);
//Assert
expect(orderManagement.getOrders()).toEqual([{id:1, item, price}]);
    } );

    it("should not get order" , ()=>{
        //arrange
        const item ="Sponge";
        const price= 15;
        orderManagement.addOrder(item,price);
        //act
       const order= orderManagement.getOrder(1);
        //Assert
expect(order).toEqual({id:1, item, price});
            });
        
      it("should call finiacel calculator revenue ",()=>{

   //arrange
   const item ="Sponge";
   const price= 15;
   orderManagement.addOrder(item,price);
   const spy=jest.spyOn(call,"getRevenue");
   //act
    orderManagement.getTotaleRevenue();
    //Assert
//hon bst3mel spy kerml 2t2kad 2no lma 2a3ml depency btween orderManager  wl finacialCalcular
//klche 3am ykoun cha8al 3ande 
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith([{id:1,item,price}]);
    expect(spy).toHaveReturnedWith(15);




      } );
        it("should throw  addition exception if validator does not  pass ",()=>{
        //arrange
        const item ="Sponge";
        const price= 10;
        (Validator.validate as jest.Mock).mockImplementation(()=>{
     // lma 3mlet override lal validate l2no 3rfne la7 yser error 
     //wl mock implementation howi  che8l lmtwk3to yser (ya3ne ya3tene error)       
            throw new Error("Invalid order");
            //act
            //Assert
    //hon addOrder b2leb orderManagement la7 t3mel l error lmoutwka3        
 expect(()=>orderManagement.addOrder(item,price)).toThrow("[orderManagement] Error adding order:Invalid order");
        }); });
    });


describe("Finacialcalculator",()=>{ 
    it("should calculate total price" , ()=>{
        //arrange   
        const call = new FinanceCalculator();
        const orders =[
            {id:1, item:"Sponge", price:15},
                {id:2, item:"Choclate", price:10},
                {id:3, item:"Fruit", price:10}
        ]
        //act
        const total = call.getRevenue(orders);
        //Assert
        expect(total).toBe(35);
    });
        it("should get the Average price" , ()=>{   
            //arrange

            const call = new FinanceCalculator();
            const orders =[
                {id:1, item:"Sponge", price:15},
                {id:2, item:"Choclate", price:10},
                {id:3, item:"Fruit", price:10}
            ]
            //act
            const average = call.getAverageRevenue(orders);

            //Assert
            expect(average).toBeCloseTo(11.67,2);
            });
        });











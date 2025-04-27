import { IMapper } from "./IMapper";
import { Iorder } from "../model/IOrder";
import { OrderBuilder } from "../model/builders/Order.builder";
import { IItem } from "../model/IItem";




export class OrderMapper implements IMapper<string[], Iorder> {
//hon 7atet itemMapper private kermel ma dal oul this 

    constructor(private itemMapper: IMapper<string[], IItem>) {

    }

    public map(data: string[]): Iorder {

        //const item :IItem= new CSVCakeMapper().map(data)
        //bas hon mech 3am 2ltzem bl solide principle l2no bser order 3atoul 
        //mt3ale2 bl CakeMApper l7la w3ande ktiir items 8ero 
      const   item: IItem = this.itemMapper.map(data);
      if (!item) {
        throw new Error('Item cannot be empty');
      }
        return OrderBuilder.newbuilder()
            .setId(data[0]) 
            .setItem(item)
            .setPrice(parseInt(data[data.length - 2]))
            .setQuantity(parseInt(data[data.length - 1]))
            .build(); 
    }



    }
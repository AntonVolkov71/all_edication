import {Beverage} from "./Beverage.class";
import {Espresso} from "./beverages/Espresso.class";
import {Americano} from "./beverages/Americano.class";
import {Milk} from "./condiments/Milk.class";
import {Mocha} from "./condiments/Mocha.class";

export const startDecorator = () => {
    console.log('start Decorator',)

    const beverage: Beverage = new Espresso();
    console.log('espresso ', 'cost: ' + beverage.cost() + ', desc: ' + beverage.getDescription());

    let beverage2 = new Americano()

    beverage2 = new Milk(beverage2);
    beverage2 = new Mocha(beverage2);

    console.log('mocha + milk + espresso ' + beverage2.cost() + ', desc: ' + beverage2.getDescription());

}
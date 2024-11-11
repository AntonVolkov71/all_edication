import {Duck} from "../Duck.class";
import {FlyNoWay} from "../FlyBehavior/FlyNoWay.class";

export class YellowDuck extends Duck {
    constructor() {
        super(new FlyNoWay());

    }

    display() {
        console.log('i am is YELLOW duck',)
    }
}
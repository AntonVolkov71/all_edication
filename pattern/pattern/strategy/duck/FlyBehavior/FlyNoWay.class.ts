import {IFlyBehavior} from "./FlyBehavior.interface";

export class FlyNoWay implements IFlyBehavior {
    fly() {
        console.log('fly no way',)
    }
}
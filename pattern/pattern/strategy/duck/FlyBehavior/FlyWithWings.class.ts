import {IFlyBehavior} from "./FlyBehavior.interface";

export class FlyWithWings implements IFlyBehavior {
    fly() {
        console.log('fly with wings',)
    }
}
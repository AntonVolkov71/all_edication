import {IQuackBehavior} from "./IQuackBehavior";

export class Squeak implements IQuackBehavior {
    quack() {
        console.log('утка пищит squeak', )
    }
}
import {IFlyBehavior} from "./FlyBehavior/FlyBehavior.interface";
import {IQuackBehavior} from "./QuackBehavior/IQuackBehavior";

export abstract class Duck {
    flyBehavior: IFlyBehavior
    quackBehavior: IQuackBehavior

    constructor(fb:IFlyBehavior ) {
        this.flyBehavior = fb
    }

    performFly() {
        this.flyBehavior.fly()
    }

    performQuack() {
        this.quackBehavior.quack()
    }

    setFlyBehavior(fb: IFlyBehavior) {
        this.flyBehavior = fb
    }

    setQuackBehavior(fb: IQuackBehavior) {
        this.quackBehavior = fb
    }


    abstract display(): void
}
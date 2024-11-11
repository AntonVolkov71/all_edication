import {YellowDuck} from "./duck/ducks/YellowDuck.class";
import {FlyWithWings} from "./duck/FlyBehavior/FlyWithWings.class";
import {Squeak} from "./duck/QuackBehavior/Squeak.class";

export const startStrategy = () => {
    console.log('start Strategy',)

    const yellowDuck = new YellowDuck()

    yellowDuck.display()

    yellowDuck.performFly()
    yellowDuck.setFlyBehavior(new FlyWithWings())
    yellowDuck.performFly()

    yellowDuck.setQuackBehavior(new Squeak())
    yellowDuck.performQuack()

}
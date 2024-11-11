import {CondimentDecorator} from "../CondimentDecorator.class";
import {Beverage} from "../Beverage.class";

export class Mocha extends CondimentDecorator {
    constructor(public beverage: Beverage) {
        super();
    }
    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(): number {
        return this.beverage.cost() + 44;
    }
}
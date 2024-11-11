import {CondimentDecorator} from "../CondimentDecorator.class";
import {Beverage} from "../Beverage.class";

export class Milk extends CondimentDecorator {
    constructor(public beverage: Beverage) {
        super();
    }
    getDescription(): string {
        return this.beverage.getDescription() + ", Milk";
    }

    cost(): number {
        return this.beverage.cost() + 20;
    }
}
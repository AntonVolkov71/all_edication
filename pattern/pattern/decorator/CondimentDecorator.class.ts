import {Beverage} from "./Beverage.class";

export abstract class CondimentDecorator extends Beverage {
    protected beverage: Beverage

    public abstract getDescription(): string;
}

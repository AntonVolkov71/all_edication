import {Beverage} from "../Beverage.class";

export class Espresso extends Beverage {
    public getDescription(): string {
        return 'Espresso'
    }

    public cost(): number {
        return 13;
    }
}
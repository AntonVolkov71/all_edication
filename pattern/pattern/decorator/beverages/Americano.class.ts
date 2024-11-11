import {Beverage} from "../Beverage.class";

export class Americano extends Beverage {
    public getDescription(): string {
        return 'Americano'
    }

    public cost(): number {
        return 3;
    }
}
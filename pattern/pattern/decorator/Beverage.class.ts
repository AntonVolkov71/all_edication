export abstract class Beverage {
    public description: string = 'Unknown beverage'

    public getDescription(): string {
        return this.description
    }

    public abstract cost(): number;

}
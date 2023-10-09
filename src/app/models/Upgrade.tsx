export class Upgrade {

    name: string;
    cost: number;
    multiplier: number

    constructor(name: string, cost: number, multiplier: number) {
        this.name = name;
        this.cost = cost;
        this.multiplier = multiplier;
    }
}
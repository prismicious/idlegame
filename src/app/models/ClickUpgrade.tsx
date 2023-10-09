import { Upgrade } from "./upgrade";

export class ClickUpgrade extends Upgrade {
    clickPower: number;

    constructor(name: string, cost: number, multiplier: number, clickPower: number) {
        super(name, cost, multiplier)
        this.clickPower = clickPower;
    }
}
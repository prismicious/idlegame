import { Item } from "./Item";
import { Upgrade } from "./upgrade";

export class Player {
    money: number;
    clickPower: number
    upgradeRate: number
    listOfUpgrades: Upgrade[];
    start: boolean;
    inventory: Item[];

    constructor() {
        this.money = 0;
        this.clickPower = 1;
        this.upgradeRate = 0;
        this.listOfUpgrades = [];
        this.start = false;
        this.inventory = [];
    }

    addUpgradeToListOfUpgrades(upgrade: Upgrade) {
        this.listOfUpgrades.push(upgrade);
    }
}
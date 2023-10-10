import { InventoryItem } from "./Inventory/Equipment/InventoryItem";
import { Upgrade } from "./Upgrade";

export class Player {
    money: number;
    clickPower: number
    upgradeRate: number
    listOfUpgrades: Upgrade[];
    start: boolean;
    inventory: InventoryItem[];

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
import { Boots, ChestArmor, Helmet, Leggings, Weapon } from "./Inventory/Equipment";
import { InventoryItem } from "./Inventory/Equipment/InventoryItem";
import { Upgrade } from "./Upgrade";

class PlayerEquipment {
    weaponSlot1?: Weapon;
    weaponSlot2?: Weapon;
    chestArmor?: ChestArmor;
    boots?: Boots;
    leggings?: Leggings;
    helmet?: Helmet;
    constructor() { }
}

export class Player {
    money: number;
    clickPower: number
    upgradeRate: number
    listOfUpgrades: Upgrade[];
    start: boolean;
    inventory: InventoryItem[];
    equipment: PlayerEquipment;

    constructor() {
        this.money = 0;
        this.clickPower = 1;
        this.upgradeRate = 0;
        this.listOfUpgrades = [];
        this.start = false;
        this.inventory = [];
        this.equipment = new PlayerEquipment();
    }

    addUpgradeToListOfUpgrades(upgrade: Upgrade) {
        this.listOfUpgrades.push(upgrade);
    }
}
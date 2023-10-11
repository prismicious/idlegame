import { InventoryItem } from "@/app/models/Inventory/Equipment/InventoryItem";
import { Pickaxe } from "./Pickaxe";
import { PickaxeTypes } from "./enums";
import { OreItem } from "./OreItem";


export class EarlyPlayer {
    money: number;
    experience: number;
    level: number;
    start: boolean;
    pickaxe: Pickaxe;
    inventory: OreItem[];
    baseDamage: number;

    constructor() {
        this.money = 0;
        this.level = 1;
        this.experience = 0;
        this.start = false;
        this.inventory = [];
        this.baseDamage = 0;
        this.pickaxe = new Pickaxe(PickaxeTypes.Wood, 1);
    }

    gainExperience(experience: number) {
        this.experience += experience;

        if (this.experience >= 100) {
            this.level++;
            this.experience = 0;
            this.baseDamage += 1;
        }
    }
}
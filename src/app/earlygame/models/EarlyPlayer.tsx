import { Pickaxe } from "./Pickaxe";
import { PickaxeTypes } from "./enums";
import { OreItem } from "./OreItem";
import { PickaxeFactory } from "../data/PickaxeFactory";


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
        this.pickaxe = new PickaxeFactory().createPickaxe(PickaxeTypes.Wood);
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
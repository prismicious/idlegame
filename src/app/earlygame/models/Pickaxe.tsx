import { Damage } from "./Damage";
import { PickaxeTypes } from "./enums";

export abstract class BasePickaxe {
    type: PickaxeTypes;
    damage: Damage;

    constructor(type: PickaxeTypes, damage: Damage) {
        this.type = type;
        this.damage = damage;
    }
}

export class Pickaxe extends BasePickaxe {
    getName = () => `Pickaxe: ${this.type} - Damage: ${this.damage}`;
    getDamage = (): number => {
        return Math.floor(Math.random() * (this.damage.max - this.damage.min + 1) + this.damage.min);
    }
}


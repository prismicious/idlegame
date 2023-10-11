import { PickaxeTypes } from "./enums";

export class Pickaxe {
    type: PickaxeTypes;
    damage: number;
    name: string;

    constructor(type: PickaxeTypes, damage: number) {
        this.type = type;
        this.damage = damage;
        this.name = `Pickaxe: ${type} - Damage: ${damage}`
    }
}

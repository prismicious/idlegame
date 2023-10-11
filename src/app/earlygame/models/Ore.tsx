import { InventoryItem } from "@/app/models/Inventory/Equipment/InventoryItem";
import { OreTypes } from "./enums";
import { OreItem } from "./OreItem";
import { OreValues } from "../data/OreValues";

export class Ore {
    type: OreTypes;
    health: number;
    experienceGain: number;
    loot: OreItem[];
    value: number;

    constructor(type: OreTypes, health: number, experienceGain: number) {
        this.type = type;
        this.health = health;
        this.experienceGain = experienceGain;
        this.loot = generateLoot(this);
        this.value = getOreValue(this.type);
    }
}

function getOreValue(type: OreTypes): number {
    return OreValues[type.toString() as keyof typeof OreValues] ?? undefined;
}

function generateLoot(ore: Ore): OreItem[] {
    const min = 1;
    const max = 6;
    const roll = Math.floor(Math.random() * max) + min

    let loot = [];

    console.log(`ore amount: ${roll}`);

    for (let i = 0; i < roll; i++) {
        loot.push(new OreItem(ore.type, ore.value, ore.type));
    }

    return loot;
}

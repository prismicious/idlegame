import { InventoryItem } from "@/app/models/Inventory/Equipment/InventoryItem";
import { OreTypes } from "./enums";
import { OreItem } from "./OreItem";

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

function getOreValue(type: OreTypes) {
   switch (type) {
    // Add cases
    case OreTypes.Stone: 
        return 1;
    case OreTypes.Copper:
        return 5;
    case OreTypes.Bronze:
        return 10;
    case OreTypes.Silver:
        return 15;
    case OreTypes.Gold:
        return 20;
    case OreTypes.Platinum:
        return 25;
    case OreTypes.Diamond:
        return 50;
   }
}

function generateLoot(ore: Ore): OreItem[] {
    const roll = Math.floor(Math.random() * 6) + 1;

    let loot = [];

    console.log(`ore amount: ${roll}`);

    for (let i = 0; i < roll; i++) {
        loot.push(new OreItem(ore.type, ore.value, ore.type));
    }

    return loot;
}

import { OneHandedWeapons, TwoHandedWeapons } from "@/app/utils/Enums";
import { InventoryItem } from "./InventoryItem";

export class Weapon implements InventoryItem {
    type: OneHandedWeapons | TwoHandedWeapons;
    name: string;
    rarity: string;

    constructor(name: string, type: OneHandedWeapons | TwoHandedWeapons, rarity: string) {
        this.name = name;
        this.type = type;
        this.rarity = rarity;
    }
}
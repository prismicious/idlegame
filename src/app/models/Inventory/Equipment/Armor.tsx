import { Equipment } from "@/app/utils/Enums";
import { InventoryItem } from "./InventoryItem";

export class Armor implements InventoryItem {
    name: string
    armor: number;
    type: Equipment
    rarity: string;

    constructor(name: string, armor: number, type: Equipment, rarity: string) {
        this.name = name;
        this.armor = armor;
        this.type = type;
        this.rarity = rarity;
    }
}
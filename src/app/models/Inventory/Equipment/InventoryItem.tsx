import { Equipment, OneHandedWeapons, TwoHandedWeapons } from "@/app/utils/Enums";

export interface InventoryItem {
    name: string;
    type: Equipment | TwoHandedWeapons | OneHandedWeapons;
}
import { Armor, Boots, ChestArmor, Helmet, Leggings, Weapon } from "../models/Inventory/Equipment";
import { Equipment, OneHandedWeapons, TwoHandedWeapons } from "./Enums";
import { generateRarity } from "./GenerateRarity";

export const rollItem = (roll: number): Armor | Weapon => {
    if (roll <= 50) {
        return rollArmor(Math.random() * 100, generateRarity());
    } else {
        return rollWeapon(Math.random() * 100, generateRarity(), Math.random() * 100);
    }
}

export function rollArmor(roll: number, rarity: string): Armor {
    let item: Armor;
    const rarityMultiplier = getRarityMultiplier(rarity);
    const armorRoll = Math.floor(Math.random() * 5) + 1 * rarityMultiplier;
    if (roll <= 25 && roll >= 0) {
        item = new Helmet(`Helmet (${rarity})`, armorRoll, Equipment.Helmet, rarity);
    } else if (roll >= 25 && roll <= 50) {
        item = new Boots(`Boots (${rarity})`, armorRoll, Equipment.Boots, rarity);
    } else if (roll >= 50 && roll <= 75) {
        item = new Leggings(`Leggings (${rarity})`, armorRoll, Equipment.Leggings, rarity);
    } else if (roll >= 75 && roll <= 100) {
        item = new ChestArmor(`ChestArmor (${rarity})`, armorRoll, Equipment.ChestArmor, rarity);
    } else {
        throw new Error(`Item was not assigned, roll: ${roll}`);
    }

    return item;
}

export function rollWeapon(roll: number, rarity: string, rollForType: number): Weapon {
    const weaponType = rollForType >= 50 ? "OneHanded" : "TwoHanded";

    let item;

    if (weaponType == "OneHanded") {
        if (roll <= 12) {
            item = new Weapon(`Wand (${rarity})`, OneHandedWeapons.Wand, rarity);
        } else if (roll >= 12 && roll <= 25) {
            item = new Weapon(`Sword (${rarity})`, OneHandedWeapons.Sword, rarity);
        } else if (roll >= 26 && roll <= 50) {
            item = new Weapon(`Axe (${rarity})`, OneHandedWeapons.Axe, rarity);
        } else if (roll >= 51 && roll <= 75) {
            item = new Weapon(`Dagger (${rarity})`, OneHandedWeapons.Dagger, rarity);
        } else if (roll >= 76 && roll <= 100) {
            item = new Weapon(`Shield (${rarity})`, OneHandedWeapons.Shield, rarity);
        } 
    }

    if (weaponType == "TwoHanded") {
        if (roll <= 12) {
            item = new Weapon(`Axe (${rarity})`, TwoHandedWeapons.Axe, rarity);
        } else if (roll >= 12 && roll <= 25) {
            item = new Weapon(`Sword (${rarity})`, TwoHandedWeapons.Sword, rarity);
        } else if (roll >= 26 && roll <= 50) {
            item = new Weapon(`Bow (${rarity})`, TwoHandedWeapons.Bow, rarity);
        } else if (roll >= 51 && roll <= 75) {
            item = new Weapon(`Staff (${rarity})`, TwoHandedWeapons.Staff, rarity);
        } else if (roll >= 76 && roll <= 100) {
            item = new Weapon(`Hammer (${rarity})`, TwoHandedWeapons.Hammer, rarity);
        }
    }

    if (!item) {
        throw new Error(`Item was not assigned, roll: ${roll}`);
    }

    return item;
}

const getRarityMultiplier = (rarity: string): number => {
    switch (rarity) {
        case "Trash": return 1;
        case "Common": return 4;
        case "Uncommon": return 7;
        case "Rare": return 10;
        case "Epic": return 15;
        case "Legendary": return 25;

        default: return 1;
    }
}


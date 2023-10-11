import { Armor, Boots, ChestArmor, Helmet, Leggings, Weapon } from "../models/Inventory/Equipment";
import { Equipment, OneHandedWeapons, TwoHandedWeapons } from "./Enums";
import { generateRarity } from "./GenerateRarity";

export const rollItem = (roll: number): Armor | Weapon => {
    if (roll <= 50) {
        return rollArmor(Math.random() * 100, generateRarity());
    } 
    return rollWeapon(Math.random() * 100, generateRarity(), Math.random() * 100);
}

/**
 * This is a method
 * @param roll A number
 * @param rarity A string
 * @returns An armor
 */
export function rollArmor(roll: number, rarity: string): Armor {
    const rarityMultiplier = getRarityMultiplier(rarity);
    const armorRoll = Math.floor(Math.random() * 5) + 1 * rarityMultiplier;
    const supportedArmors = [
        new Helmet(`Helmet (${rarity})`, armorRoll, Equipment.Helmet, rarity),
        new Boots(`Boots (${rarity})`, armorRoll, Equipment.Boots, rarity),
        new Leggings(`Leggings (${rarity})`, armorRoll, Equipment.Leggings, rarity),
        new ChestArmor(`ChestArmor (${rarity})`, armorRoll, Equipment.ChestArmor, rarity)
    ];
    const amountArmors = supportedArmors.length;
    const selectedArmorType = Math.round(Math.random() * (amountArmors - 1));
    if (!supportedArmors[selectedArmorType]) throw new Error(`Item was not assigned, roll: ${roll}`)
    return supportedArmors[selectedArmorType];
}

export function rollWeapon(roll: number, rarity: string, rollForType: number): Weapon {
    const weaponType = rollForType >= 50 ? "OneHanded" : "TwoHanded";
    const supportedWeapons = {
        "OneHanded": [
            new Weapon(`Wand (${rarity})`, OneHandedWeapons.Wand, rarity),
            new Weapon(`Sword (${rarity})`, OneHandedWeapons.Sword, rarity),
            new Weapon(`Axe (${rarity})`, OneHandedWeapons.Axe, rarity),
            new Weapon(`Dagger (${rarity})`, OneHandedWeapons.Dagger, rarity),
            new Weapon(`Shield (${rarity})`, OneHandedWeapons.Shield, rarity)
        ],
        "TwoHanded": [
            new Weapon(`Sword (${rarity})`, TwoHandedWeapons.Sword, rarity),
            new Weapon(`Axe (${rarity})`, TwoHandedWeapons.Axe, rarity),
            new Weapon(`Bow (${rarity})`, TwoHandedWeapons.Bow, rarity),
            new Weapon(`Hammer (${rarity})`, TwoHandedWeapons.Hammer, rarity),
            new Weapon(`Staff (${rarity})`, TwoHandedWeapons.Staff, rarity),
        ]
    }
    const amountArmors = supportedWeapons[weaponType].length;
    const selectedArmorType = Math.round(Math.random() * (amountArmors - 1));
    if (!supportedWeapons[weaponType][selectedArmorType]) throw new Error(`Item was not assigned, roll: ${roll}`);
    return supportedWeapons[weaponType][selectedArmorType];
}
// TODO: Explain what is this?= What does him this do? explain me. now
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


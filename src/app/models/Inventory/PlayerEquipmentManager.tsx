import { Equipment, OneHandedWeapons, TwoHandedWeapons } from "@/app/utils/Enums";
import { Player } from "../Player";
import { Armor, Boots, ChestArmor, Helmet, Leggings, Weapon } from "./Equipment/";

export class PlayerEquipmentManager {
    public weaponSlot1: null | Weapon;
    public weaponSlot2: null | Weapon;
    public chestArmor: null | ChestArmor;
    public boots: null | Boots;
    public helmet: null | Helmet;
    public leggings: null | Leggings;
    player: Player;

    constructor(player: Player) {
        this.player = player;
        this.weaponSlot1 = null;
        this.weaponSlot2 = null;
        this.chestArmor = null;
        this.boots = null;
        this.leggings = null;
        this.helmet = null;
    }

    equipArmor(item: Armor) {
        console.log(item)
        if (!this.player.inventory.includes(item)) {
            throw new Error("Item not in inventory.")
        }
        console.log(item.type);

        switch (item.type) {
            case Equipment.Boots:
                this.player.inventory.push(this.boots as Boots);
                this.boots = item;
                console.log('Succesfully equipped boots');
                break;
            case Equipment.ChestArmor:
                this.player.inventory.push(this.chestArmor as ChestArmor);
                this.chestArmor = item;
                console.log('Succesfully equipped chest armor');
                break;
            case Equipment.Helmet:
                this.player.inventory.push(this.helmet as Helmet);
                this.helmet = item;
                console.log('Succesfully equipped helmet');
                break;
            case Equipment.Leggings:
                this.player.inventory.push(this.leggings as Leggings);
                this.leggings = item;
                console.log('Succesfully equipped leggings');
                break;
            default:
                console.log("Something went wrong")
                break;
        }
    }

    equipWeapon(weapon: Weapon, slot: 1 | 2) {
        console.log(weapon)
        if (slot == 1) {
            if (weapon.type in TwoHandedWeapons) {
                if (this.weaponSlot1) {
                    this.player.inventory.push(this.weaponSlot1);
                    this.weaponSlot1 = weapon;
                    return;
                } else {
                    this.weaponSlot1 = weapon;
                }

                if (this.weaponSlot2) {
                    this.player.inventory.push(this.weaponSlot2)
                    this.weaponSlot2 = null;
                    return;
                }
            }

            if (weapon.type in OneHandedWeapons) {
                if (this.weaponSlot1) {
                    this.player.inventory.push(this.weaponSlot1);
                    this.weaponSlot1 = weapon;
                    return;
                } else {
                    this.weaponSlot1 = weapon;
                }
            }
        }

        if (slot == 2) {
            if (weapon.type in OneHandedWeapons) {
                if (this.weaponSlot2) {
                    this.player.inventory.push(this.weaponSlot2);
                    this.weaponSlot2 = weapon;
                    return;
                }
            } else {
                throw new Error("Cant equip two-handed weapons in slot 2.");
            }
        }

        console.log(this.weaponSlot1);
        console.log(this.weaponSlot2);
    }
}
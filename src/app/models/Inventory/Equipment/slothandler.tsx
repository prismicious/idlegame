import { TwoHandedWeapons, OneHandedWeapons } from "@/app/utils/Enums";
import { Weapon } from ".";
import { PlayerEquipmentManager } from "../PlayerEquipmentManager";

export const handleSlot1 = (weapon: Weapon, equipmentHandler: PlayerEquipmentManager) => {
    if (weapon.type in TwoHandedWeapons) {
        if (equipmentHandler.weaponSlot1) {
            equipmentHandler.player.inventory.push(equipmentHandler.weaponSlot1);
            equipmentHandler.weaponSlot1 = weapon;
            return;
        } else {
            equipmentHandler.weaponSlot1 = weapon;
        }

        if (equipmentHandler.weaponSlot2) {
            equipmentHandler.player.inventory.push(equipmentHandler.weaponSlot2)
            equipmentHandler.weaponSlot2 = null;
            return;
        }
    }

    if (weapon.type in OneHandedWeapons) {
        if (equipmentHandler.weaponSlot1) {
            equipmentHandler.player.inventory.push(equipmentHandler.weaponSlot1);
            equipmentHandler.weaponSlot1 = weapon;
            return;
        } else {
            equipmentHandler.weaponSlot1 = weapon;
        }
    }
}

export const handleSlot2 = (weapon: Weapon, equipmentHandler: PlayerEquipmentManager) => {
    if (weapon.type in OneHandedWeapons) {
        if (equipmentHandler.weaponSlot2) {
            equipmentHandler.player.inventory.push(equipmentHandler.weaponSlot2);
            equipmentHandler.weaponSlot2 = weapon;
            return;
        }
    } else {
        throw new Error("Cant equip two-handed weapons in slot 2.");
    }
}
import { Equipment, OneHandedWeapons, TwoHandedWeapons } from "@/app/utils/Enums";
import { Player } from "../Player";
import { Armor, Boots, ChestArmor, Helmet, Leggings, Weapon } from "./Equipment/";
import { handleSlot1, handleSlot2 } from "./Equipment/slothandler";

export class PlayerEquipmentManager {
    player: Player;

    constructor(player: Player) {
        this.player = player;
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
            handleSlot1(weapon, this);
        }

        if (slot == 2) {
            handleSlot2(weapon, this);
        }

        console.log(this.weaponSlot1);
        console.log(this.weaponSlot2);
    }
}

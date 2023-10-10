import { Equipment } from "@/app/utils/Enums";
import { Armor } from "./Armor";

export class Helmet extends Armor {

    constructor(name: string, armor: number, type: Equipment, rarity: string) {
        super(name, armor, type, rarity);
    }
}
import { Pickaxe } from "../models/Pickaxe";
import { PickaxeTypes as PickaxeType, PickaxeTypes } from "../models/enums";
import { PickaxeValues } from "./PickaxeValues";

export class PickaxeFactory {
    createPickaxe(type: PickaxeTypes): Pickaxe {
        return PickaxeValues[type] as Pickaxe;
    }
}
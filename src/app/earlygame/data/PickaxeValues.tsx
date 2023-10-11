import { BasePickaxe } from "../models/Pickaxe";
import { PickaxeTypes } from "../models/enums";
export const PickaxeValues: { [key: string]: BasePickaxe } = {
    "PickaxeType.Stone": {
        "type": PickaxeTypes.Stone,
        "damage": {
            min: 1,
            max: 5
        }
    },
    "PickaxeType.Copper": {
        "type": PickaxeTypes.Copper,
        "damage": {
            min: 2,
            max: 6
        }
    },
    "PickaxeType.Bronze": {
        "type": PickaxeTypes.Bronze,
        "damage": {
            min: 7,
            max: 12
        }
    },
    "PickaxeType.Silver": {
        "type": PickaxeTypes.Silver,
        "damage": {
            min: 8,
            max: 15
        }
    },
    "PickaxeType.Gold": {
        "type": PickaxeTypes.Gold,
        "damage": {
            min: 16,
            max: 25
        }
    },
    "PickaxeType.Platinum": {
        "type": PickaxeTypes.Platinum,
        "damage": {
            min: 26,
            max: 36
        }
    },
    "PickaxeType.Diamond": {
        "type": PickaxeTypes.Diamond,
        "damage": {
            min: 36,
            max: 50
        }
    }
};

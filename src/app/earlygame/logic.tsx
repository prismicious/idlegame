import { EarlyPlayer } from "./models/EarlyPlayer";
import { Ore } from "./models/Ore";
import { OreItem } from "./models/OreItem";
import { Pickaxe } from "./models/Pickaxe";
import { PickaxeTypes } from "./models/enums";

export const generatePickaxe = (type: PickaxeTypes): Pickaxe => {

    const damage = generateDamage(type);

    switch (type) {
        case PickaxeTypes.Stone:
            return new Pickaxe(PickaxeTypes.Stone, damage);
        case PickaxeTypes.Copper:
            return new Pickaxe(PickaxeTypes.Copper, damage);
        case PickaxeTypes.Bronze:
            return new Pickaxe(PickaxeTypes.Bronze, damage);
        case PickaxeTypes.Silver:
            return new Pickaxe(PickaxeTypes.Silver, damage);
        case PickaxeTypes.Gold:
            return new Pickaxe(PickaxeTypes.Gold, damage);
        case PickaxeTypes.Platinum:
            return new Pickaxe(PickaxeTypes.Platinum, damage);
        case PickaxeTypes.Diamond:
            return new Pickaxe(PickaxeTypes.Diamond, damage);
    }

    return new Pickaxe(PickaxeTypes.Wood, 1);
};

const generateDamage = (type: PickaxeTypes): number => {
    
    switch (type) {
        case PickaxeTypes.Stone:
            return randomDamageGenerator(1, 5);
        case PickaxeTypes.Copper:
            return randomDamageGenerator(2, 6);
        case PickaxeTypes.Bronze:
            return randomDamageGenerator(7, 12);
        case PickaxeTypes.Silver:
            return randomDamageGenerator(8, 15);
        case PickaxeTypes.Gold:
            return randomDamageGenerator(16, 25);
        case PickaxeTypes.Platinum:
            return randomDamageGenerator(26, 35);
        case PickaxeTypes.Diamond:
            return randomDamageGenerator(36, 50);
    }

    return 1;
};

const randomDamageGenerator = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const hitRock = (player: EarlyPlayer, ore: Ore) => { 
    console.log(`---Current ore health: ${ore.health}`)
    const newHealth = ore.health - player.baseDamage - player.pickaxe.damage;
    console.log(`---New ore health: ${newHealth}`)
    ore.health = newHealth;


    if (ore.health <= 0) {
        player.gainExperience(ore.experienceGain);
        for (const item of ore.loot) {
            player.inventory.push(item);
        }
    }
}

export const sellItem = (player: EarlyPlayer): void => {
    
    if (player.inventory.length === 0) {
        console.log("No items to sell");
        return;
    }

    console.log("Selling items");
    for (const item of player.inventory) {
        player.money += item.value;
    }
    console.log(`Sold items for ${player.money}, congratulations.`);
} 
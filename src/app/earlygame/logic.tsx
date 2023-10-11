import { PickaxeFactory } from "./data/PickaxeFactory";
import { EarlyPlayer } from "./models/EarlyPlayer";
import { Ore } from "./models/Ore";
import { Pickaxe } from "./models/Pickaxe";
import { PickaxeTypes } from "./models/enums";

export const generatePickaxe = (type: PickaxeTypes): Pickaxe => {
    const pickaxeFactory = new PickaxeFactory();
    return pickaxeFactory.createPickaxe(type);
};

export const hitRock = (player: EarlyPlayer, ore: Ore) => {
    console.log(`---Current ore health: ${ore.health}`)
    const newHealth = ore.health - player.baseDamage - player.pickaxe.getDamage();
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
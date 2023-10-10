import { ClickUpgrade } from "./models/ClickUpgrade";
import { InventoryItem } from "./models/Inventory/Equipment/InventoryItem";
import { Player } from "./models/Player";
import { Upgrade } from "./models/Upgrade";
import { rollItem } from "./utils/RollItem";
import { isUpgradeInList } from "./utils/isUpgradeInList";

export const game = () => {
}

export const addMoney = (player: Player) => {
    setInterval(() => increaseMoney(player), 1000);
}

export const increaseMoney = (player: Player) => {
    player.money = player.money + 1 * player.upgradeRate;
}

export const getGold = (player: Player): number => {
    const goldAmt = player.clickPower;
    console.log(`Found ${goldAmt} gold`);
    player.money += goldAmt;

    return player.money;
}



export const buyUpgrade = (player: Player, upgrade: Upgrade) => {
    if (isUpgradeInList(upgrade, player.listOfUpgrades)) {
        console.log("Upgrade already bought. Returning;");
        return;
    }

    console.log(`Purchasing upgrade`)
    if (upgrade instanceof ClickUpgrade) {
        buy(player.money, upgrade.cost);
        player.clickPower += upgrade.clickPower;
    }

    if (player.money >= upgrade.cost) {
        buy(player.money, upgrade.cost);
        player.upgradeRate = player.upgradeRate + upgrade.multiplier;
        player.addUpgradeToListOfUpgrades(upgrade);
        console.log(player.listOfUpgrades);
    }
}

export const buy = (wallet: number, cost: number) => {
    wallet -= cost;
}

export const generateItem = (player: Player): InventoryItem => {
    const item = rollItem(Math.random() * 100);
    addItemToInventory(player, item);

    return item;
}

export const addItemToInventory = (player: Player, item: InventoryItem) => {
    player.inventory.push(item);
}
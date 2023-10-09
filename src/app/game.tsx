import { ClickUpgrade } from "./models/clickUpgrade";
import { Item } from "./models/Item";
import { Player } from "./models/player";
import { Upgrade } from "./models/upgrade";
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

export const buy = (price: number, cost: number) => {
    price -= cost;
}

export const generateItem = (player: Player): Item => {
    const item = new Item();
    console.log()
    player.inventory.push(item);
    player.clickPower += item.clickPower

    return item;
}

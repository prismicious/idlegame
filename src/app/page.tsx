'use client'

import { useEffect, useState } from "react";
import ProgressBarButton from "./components/ProgressBarButton";
import { addMoney, buyUpgrade, generateItem } from "./game"; // Assuming you import clickButton from "./game"
import { ClickUpgrade } from "./models/ClickUpgrade";
import { PlayerEquipmentManager } from "./models/Inventory/PlayerEquipmentManager";
import { Player } from "./models/Player";
import { Upgrade } from "./models/Upgrade";
import { isUpgradeInList } from "./utils/isUpgradeInList";
import { InventoryItem } from "./models/Inventory/Equipment/InventoryItem";
import { Armor, Weapon } from "./models/Inventory/Equipment";
import { TwoHandedWeapons, OneHandedWeapons } from "./utils/Enums";

export default function Home() {
  const [money, setMoney] = useState<number>(0);
  const [player, setPlayer] = useState(new Player());
  const [multiplier, setMultiplier] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]); // Step 1: Create a state variable for logs


  const playerEquipmentManager = new PlayerEquipmentManager(player);

  const upgrade1 = new Upgrade("Hire Miner", 10, 1);
  const upgrade2 = new Upgrade("upgrade 2", 25, 3);
  const upgrade3 = new Upgrade("upgrade 3", 50, 5);
  const clickUpgrade1 = new ClickUpgrade("click upgrade 1", 25, 0, 1);

  const explore = () => {
    const item = generateItem(player);
  };

  const equipArmor = () => {
    console.log(`Attempting to equip armor`)
    const armorItem = player.inventory.find(item => item instanceof Armor) as Armor;
    console.log(armorItem);
    if (!armorItem) {
      console.log("No armor found");
      return;
    }

    if (armorItem) {
      playerEquipmentManager.equipArmor(armorItem);
    }
  };

  const equipWeapon = () => {
    console.log(`Attempting to equip weapon`)
    const weaponItem = player.inventory.find(item => item instanceof Weapon) as Weapon;
    console.log(weaponItem)

    if (!weaponItem) {
      console.log("No weapon found");
      return;
    }

    if (weaponItem.type in TwoHandedWeapons) {
      playerEquipmentManager.equipWeapon(weaponItem, 1);
    }

    if (weaponItem.type in OneHandedWeapons) {
      playerEquipmentManager.equipWeapon(weaponItem, 1);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setMoney(parseFloat(player.money.toFixed(2)));
      setMultiplier(parseFloat(player.upgradeRate.toFixed(2)));
    });
  });

  if (!player.start) {
    player.start = true;
    addMoney(player);
  }

  const upgrades = [upgrade1, clickUpgrade1, upgrade2, upgrade3];

  const addLog = (message: string) => {
    setLogs([...logs, message]);
  };

  return (
    <div>
      <h1>MineClicker</h1>
      <ProgressBarButton player={player} setMoney={setMoney} addLog={addLog} />
      <br />
      <div className="progress-btn" data-progress-style="fill-bottom">
        <div className="progress"></div>
      </div>
      Gold: {money}
      <br />
      <button onClick={() => equipArmor()}> Equip armor </button>
      <button onClick={() => equipWeapon()}> Equip weapon </button>

      {multiplier} Gold/sec
      <br />
      {player.clickPower} Gold/dig
      <br />
      <div>
        {upgrades.map((upgrade, index) => (
          money >= upgrade.cost && !isUpgradeInList(upgrade, player.listOfUpgrades) && (
            <div key={index}>
              <button
                onClick={() => {
                  buyUpgrade(player, upgrade);
                  addLog(`Purchased ${upgrade.name}`);
                }}
              >
                {upgrade.name ? `${upgrade.name} - ` : ''}
                {upgrade.cost} gold - {upgrade instanceof ClickUpgrade ? upgrade.clickPower : `${upgrade.multiplier}`}
              </button>
            </div>
          )
        ))}
      </div>
      <br />
      <br />
      <h2>Inventory:</h2>
      <ul>
        {player.inventory.map((item, index) => (
          <li key={index}>
            {item.name}
          </li>
        ))}
      </ul>

      <br />
      <h2>Logs:</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>

      <br />
      <h2>Equipment:</h2>
      <ul>
        <li>Weapon 1: {playerEquipmentManager.weaponSlot1?.name}</li>
        <li>Weapon 2: {playerEquipmentManager.weaponSlot2?.name}</li>
        <li>Chest Armor: {playerEquipmentManager.chestArmor?.name}</li>
        <li>Boots: {playerEquipmentManager.boots?.name}</li>
        <li>Leggings: {playerEquipmentManager.leggings?.name}</li>
        <li>Helmet: {playerEquipmentManager.helmet?.name}</li>
      </ul>
    </div>
  );
}

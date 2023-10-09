'use client'

import { useEffect, useState } from "react";
import ProgressBarButton from "./components/ProgressBarButton";
import { addMoney, buyUpgrade } from "./game"; // Assuming you import clickButton from "./game"
import { ClickUpgrade } from "./models/clickUpgrade";
import { Player } from "./models/player";
import { Upgrade } from "./models/upgrade";
import { isUpgradeInList } from "./utils/isUpgradeInList";

export default function Home() {
  const [money, setMoney] = useState<number>(0);
  const [player, setPlayer] = useState(new Player());
  const [multiplier, setMultiplier] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]); // Step 1: Create a state variable for logs

  const upgrade1 = new Upgrade("Hire Miner", 10, 1);
  const upgrade2 = new Upgrade("upgrade 2", 25, 3);
  const upgrade3 = new Upgrade("upgrade 3", 50, 5);
  const clickUpgrade1 = new ClickUpgrade("click upgrade 1", 25, 0, 1);

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
          <li key={index} className={item.rarity.toLowerCase()}>
            {item.name} - {item.clickPower} power
          </li>
        ))}
      </ul>

      <br/>
      <h2>Logs:</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

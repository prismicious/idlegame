'use client';

import { useEffect, useState } from 'react';
import { addMoney, getGold } from '../game';
import { EarlyPlayer } from './models/EarlyPlayer';
import { Ore } from './models/Ore';
import { OreTypes } from './models/enums';
import { hitRock, sellItem } from './logic';
import { OreItem } from './models/OreItem';

function Hello() {
  const [player, setPlayer] = useState(new EarlyPlayer());
  const [money, setMoney] = useState<number>(0);
  const [currentOre, setCurrentOre] = useState<Ore>(new Ore(OreTypes.Copper, 10, 10));
  const [inventory, setInventory] = useState<OreItem[]>([]);

  const handleButtonClick = () => {
    if (currentOre.health <= 0) {
      setCurrentOre(new Ore(OreTypes.Copper, 10, 10));
      console.log("Created new ore object");
    } else {
      hitRock(player, currentOre);
      console.log(`Current pickaxe damage: ${player.pickaxe.damage}`);
      console.log(`Current player damage: ${player.baseDamage}`)
      console.log(`Current ore health: ${currentOre.health}`);
      setInventory(player.inventory);
      setCurrentOre((prevOre) => ({ ...prevOre, health: prevOre.health }));
    }
  };

  useEffect(() => {
    if (currentOre.health <= 0) {
      setCurrentOre(new Ore(OreTypes.Copper, 10, 10));
      console.log("Created new ore object");
    }
  }, [currentOre.health]);

  return (
    <div>
      <button onClick={() => handleButtonClick()}> {`${currentOre.type}: health ${currentOre.health}`} </button>
      <br />
      Gold: {money} <br />
      Damage: {player.baseDamage + player.pickaxe.damage} <br />
      Player level: {player.level} <br />
      Experience: {player.experience} / 100
      <br />
      <div>
        {player.inventory.map((item, index) => (
          <p key={index}>
            {`${item.type} - value: ${item.value}`}
          </p>
        ))}
      </div>
      <button onClick={() => sellItem(player)}>Sell inventory</button>
    </div>
  );
}

export default Hello;
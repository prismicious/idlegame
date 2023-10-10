import { Upgrade } from "../models/Upgrade";

export function isUpgradeInList(upgrade: Upgrade, listOfUpgrades: Upgrade[]) {
    return listOfUpgrades.some((existingUpgrade) => {
      return (
        existingUpgrade.cost === upgrade.cost &&
        existingUpgrade.multiplier === upgrade.multiplier
      );
    });
  }
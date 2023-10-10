import {
  Armor,
  Boots,
  ChestArmor,
  Helmet,
  Leggings,
  Weapon,
} from "../models/Inventory/Equipment";
import { rollArmor, rollItem, rollWeapon } from "./RollItem";

describe("rollItem", () => {
  it("should return an Armor object when roll is less than 50", () => {
    const armor = rollItem(30) as Armor;
    expect(armor).toBeInstanceOf(Armor);
  });

  it("should return a Weapon object when roll is greater than or equal to 50", () => {
    const weapon = rollItem(51) as Weapon;
    expect(weapon).toBeInstanceOf(Weapon);
  });
});

describe("rollArmor", () => {
  it("should return a Helmet when roll is between 0 and 25 (inclusive)", () => {
    const helmet = rollArmor(20, "Common");
    expect(helmet).toBeInstanceOf(Helmet);
  });

  it("should return Boots when roll is between 25 and 50 (inclusive)", () => {
    const boots = rollArmor(40, "Uncommon");
    expect(boots).toBeInstanceOf(Boots);
  });

  it("should return Leggings when roll is between 50 and 75 (inclusive)", () => {
    const leggings = rollArmor(60, "Rare");
    expect(leggings).toBeInstanceOf(Leggings);
  });

  it("should return ChestArmor when roll is between 75 and 100 (inclusive)", () => {
    const chestArmor = rollArmor(90, "Epic");
    expect(chestArmor).toBeInstanceOf(ChestArmor);
  });

  it("should throw an error for an invalid roll", () => {
    expect(() => rollArmor(101, "Legendary")).toThrowError(
      "Item was not assigned, roll: 101"
    );
  });
});

describe("rollWeapon", () => {
  it("should return a One-Handed Weapon when weaponType is 'OneHanded'", () => {
    const oneHandedWeapon = rollWeapon(30, "Common", 51);
    expect(oneHandedWeapon).toBeInstanceOf(Weapon);
    expect(oneHandedWeapon.name).toMatch(/Wand|Sword|Axe|Dagger|Shield/);
  });

  it("should return a Two-Handed Weapon when weaponType is 'TwoHanded'", () => {
    const twoHandedWeapon = rollWeapon(60, "Rare", 49);
    expect(twoHandedWeapon).toBeInstanceOf(Weapon);
    expect(twoHandedWeapon.name).toMatch(/Axe|Sword|Bow|Staff|Hammer/);
  });

  it("should throw an error for an invalid roll", () => {
    expect(() => rollWeapon(101, "Legendary", 101)).toThrowError(
      "Item was not assigned, roll: 101"
    );
  });
});

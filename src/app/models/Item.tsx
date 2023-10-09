export class Item {
    name: string;
    clickPower: number = 1;
    rarity: string;

    constructor() {
        const itemNames = ["Pickaxe", "Ring", "Necklace", "Axe", "Sword"];
        const randomIndex = Math.floor(Math.random() * itemNames.length);
        const selectedName = itemNames[randomIndex];
        this.rarity = this.generateRarity();
        this.adjustQualityBasedOnRarity();
        this.name = `${selectedName} (${this.rarity})`
    }

    generateRarity() {
        const rarities = [
            { name: "Trash", weight: 10 },
            { name: "Common", weight: 30 },
            { name: "Uncommon", weight: 25 },
            { name: "Rare", weight: 20 },
            { name: "Epic", weight: 10 },
            { name: "Legendary", weight: 5 },
        ];

        // Calculate the total weight
        const totalWeight = rarities.reduce((acc, rarity) => acc + rarity.weight, 0);

        // Generate a random number between 0 and the total weight
        const randomValue = Math.random() * totalWeight;

        // Determine the rarity based on the weighted probabilities
        let cumulativeWeight = 0;
        for (const rarity of rarities) {
            cumulativeWeight += rarity.weight;
            if (randomValue <= cumulativeWeight) {
                return rarity.name;
            }
        }

        // Default to "Trash" if something goes wrong
        return "Trash";
    }

    adjustQualityBasedOnRarity() {
        switch (this.rarity) {
            case "Trash":
                this.clickPower = 1; // Lowest quality
                break;
            case "Common":
                this.clickPower = 2; // Better than Trash
                break;
            case "Uncommon":
                this.clickPower = 3; // Better than Common
                break;
            case "Rare":
                this.clickPower = 4; // Better than Uncommon
                break;
            case "Epic":
                this.clickPower = 5; // Better than Rare
                break;
            case "Legendary":
                this.clickPower = 6; // Highest quality
                break;
            default:
                this.clickPower = 1; // Default to Trash if rarity is not recognized
        }
    }
}

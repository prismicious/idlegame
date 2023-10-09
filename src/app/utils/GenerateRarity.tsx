export const generateRarity = () => {
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
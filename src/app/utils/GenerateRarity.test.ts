import { generateRarity } from './GenerateRarity'; // Replace 'your-module' with the actual module path

describe('generateRarity', () => {
    let rarities = [
        { name: "Trash", weight: 10 },
        { name: "Common", weight: 30 },
        { name: "Uncommon", weight: 25 },
        { name: "Rare", weight: 20 },
        { name: "Epic", weight: 10 },
        { name: "Legendary", weight: 5 },
    ];

    it('should return a valid rarity', () => {
        const rarity = generateRarity();
        const validRarities = ["Trash", "Common", "Uncommon", "Rare", "Epic", "Legendary"];
        expect(validRarities).toContain(rarity);
    });
    
    it('should return "Trash" if randomValue is less than or equal to 0', () => {
        // Mock Math.random to always return 0
        const mockMathRandom = jest.spyOn(Math, 'random').mockReturnValue(0);

        const rarity = generateRarity();
        expect(rarity).toBe("Trash");

        // Restore Math.random to its original implementation
        mockMathRandom.mockRestore();
    });


    it('should return "Trash" if cumulativeWeight calculation fails', () => {
        // Mock the rarities array to have a total weight of 0
        const originalRarities = rarities;
        rarities = [
            { name: "Trash", weight: 0 },
            { name: "Common", weight: 0 },
        ];

        const rarity = generateRarity();
        expect(rarity).toBe("Trash");

        // Restore the original rarities array
        rarities = originalRarities;
    });

});

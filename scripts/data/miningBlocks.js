const miningItems = globalThis.miningItems;
// Define miningBlocks object
const miningBlocks = {
    dirtBlock: {
        name: 'Dirt Block',
        hp: 10,
        rarity: 'None',
        drops: "None"
    },
    coalBlock: {
        name: 'Coal Block',
        hp: 12,
        rarity: 5,
        drops: miningItems.coal.name
    },
    quartzBlock: {
        name: 'Quartz Block',
        hp: 12,
        rarity: 2.5,
        drops: miningItems.quartz.name
    },
    aluminiumOreBlock: {
        name: 'Aluminium Ore Block',
        hp: 13,
        rarity: 2.5,
        drops: miningItems.aluminiumOre.name
    },
    ironOreBlock: {
        name: 'Iron Ore Block',
        hp: 14,
        rarity: 2.5,
        drops: miningItems.ironOre.name
    },
    chromiumOreBlock: {
        name: 'Chromium Ore Block',
        hp: 15,
        rarity: 1,
        drops: miningItems.chromiumOre.name
    },
    copperOreBlock: {
        name: 'Copper Ore Block',
        hp: 15,
        rarity: 1,
        drops: miningItems.copperOre.name
    },
    lithiumOreBlock: {
        name: 'Lithium Ore Block',
        hp: 16,
        rarity: 0.5,
        drops: miningItems.lithiumOre.name
    },
    silverOreBlock: {
        name: 'Silver Ore Block',
        hp: 17,
        rarity: 1,
        drops: miningItems.silverOre.name
    },
    nickelOreBlock: {
        name: 'Nickel Ore Block',
        hp: 18,
        rarity: 1,
        drops: miningItems.nickelOre.name
    },
    zincOreBlock: {
        name: 'Zinc Ore Block',
        hp: 18,
        rarity: 1,
        drops: miningItems.zincOre.name
    },
    goldOreBlock: {
        name: 'Gold Ore Block',
        hp: 28,
        rarity: 0.5,
        drops: miningItems.goldOre.name
    },
    diamondBlock: {
        name: 'Diamond Block',
        hp: 61,
        rarity: 0.1,
        drops: miningItems.diamond.name
    },
    rareEarthMineralsBlock: {
        name: 'Rare Earth Minerals Block',
        hp: 1011,
        rarity: 0.001,
        drops: miningItems.rareEarthMinerals.name
    }
};

// Make the objects globally accessible
globalThis.miningBlocks = miningBlocks;

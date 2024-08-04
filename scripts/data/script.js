import { miningItems } from "./miningItems.js";
// Update weight value for all
export const smeltedItems = {
    ironIngot: {
        name: "Iron Ingot",
        value: 6,
        weight: 1,
        recipe: {
            [miningItems.ironOre.name]: 2
        },
        craftingTime: 1
    },
    copperIngot: {
        name: "Copper Ingot",
        value: 6,
        weight: 1,
        recipe: {
            [miningItems.copperOre.name]: 2
        },
        craftingTime: 3
    },
    aluminiumIngot: {
        name: "Aluminium Ingot",
        value: 6,
        weight: 1,
        recipe: {
            [miningItems.aluminiumOre.name]: 2
        },
        craftingTime: 3
    },
    silverIngot: {
        name: "Silver Ingot",
        value: 8,
        weight: 1,
        recipe: {
            [miningItems.silverOre.name]: 2
        },
        craftingTime: 5
    },
    zincIngot: {
        name: "Zinc Ingot",
        value: 15,
        weight: 1,
        recipe: {
            [miningItems.zincOre.name]: 2
        },
        craftingTime: 30
    },
    nickelIngot: {
        name: "Nickel Ingot",
        value: 15,
        weight: 1,
        recipe: {
            [miningItems.nickelOre.name]: 2
        },
        craftingTime: 30
    },
    lithiumIngot: {
        name: "Lithium Ingot",
        value: 15,
        weight: 1,
        recipe: {
            [miningItems.lithiumOre.name]: 2
        },
        craftingTime: 30
    },
    silicon: {
        name: "Silicon",
        value: 15,
        weight: 1,
        recipe: {
            [miningItems.quartz.name]: 10
        },
        craftingTime: 120
    },
    goldIngot: {
        name: "Gold Ingot",
        value: 30,
        weight: 1,
        recipe: {
            [miningItems.goldOre.name]: 2
        },
        craftingTime: 60
    },
    steel: null,
    stainlessSteel: null,





};

// Initializing Items that require recipe components from other smelted items
smeltedItems.steel = {
    name: "Steel",
    value: 8,
    weight: 1,
    recipe: {
        [smeltedItems.ironIngot.name]: 2,
        [miningItems.coal.name]: 2
    },
    craftingTime: 5
};

smeltedItems.stainlessSteel = {
    name: "Stainless Steel",
    value: 20,
    weight: 1,
    recipe: {
        [miningItems.chromiumOre.name]: 1,
        [smeltedItems.ironIngot.name]: 1,
        [miningItems.nickelOre.name]: 1,
    },
    craftingTime: 10
};
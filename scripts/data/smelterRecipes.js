export const smelterRecipes = {
	"Aluminium Ingot": {
    	requiredItems: {Bauxite: 4, Coal: 2},
		output: {Aluminium_Ingot: 1},
		smelting_time: 3
    },
    "Silicon": {
       requiredItems: {Quartz: 4, Coal: 2},
	   output: {Silicon: 1},
	   smelting_time: 3
    },
    "Iron Ingot": {
       requiredItems: {Iron: 5, Coal: 2},
	   output: {Iron_Ingot: 1},
	   smelting_time: 5
    },
    "Chromium Ingot": {
       requiredItems: {Chromium: 5, Coal: 2}, 
	   output: {Chromium_Ingot: 1},
	   smelting_time: 5
    },
    "Copper Ingot": {
		requiredItems: {Copper: 5, Coal: 2},
		output: {Copper_Ingot: 1},
		smelting_time: 5
    },
    "Lithium Ingot": {
		requiredItems: {Lithium: 6, Coal: 3},
		output: {Lithium_Ingot: 1},
		smelting_time: 10
    },
    "Silver Ingot": {
        requiredItems: {Silver: 6, Coal: 3}, 
		output: {Silver_Ingot: 1},
		smelting_time: 10
    },
    "Nickel Ingot": {
		requiredItems: {Nickel: 6, Coal: 3}, 
		output: {Nickel_Ingot: 1},
		smelting_time: 10
    },
    "Zinc Ingot": {
		requiredItems: {Zinc: 8, Coal: 4},
		output: {Zinc_Ingot: 1},
		smelting_time: 30
	},
	"Gold Ingot": {
		requiredItems: {Gold: 10, Coal: 5},
		output: {Gold_Ingot: 1},
		smelting_time: 45
	},
	"Steel Ingot": {
		requiredItems: {Coal: 10, iron_ingot: 2},
		output: {Diamond: 1},
		smelting_time: 30
	}
};
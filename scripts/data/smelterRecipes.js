export const smelterRecipes = {
	"Aluminium Ingot": {
    	requiredItems: {Bauxite: 3, Coal: 3},
		output: {Aluminium_Ingot: 1},
		smelting_time: 3
    },
    "Silicon": {
       requiredItems: {Quartz: 2, Coal: 1},
	   output: {Silicon: 1},
	   smelting_time: 2,
    },
    "Iron Ingot": {
       requiredItems: {Iron: 4, Coal: 3},
	   output: {Iron_Ingot: 1},
	   smelting_time: 4
    },
    "Chromium Ingot": {
       requiredItems: {Chromium: 6, Coal: 1}, 
	   output: {Chromium_Ingot: 1},
	   smelting_time: 6
    },
    "Copper Ingot": {
		requiredItems: {Copper: 5, Coal: 2},
		output: {Copper_Ingot: 1},
		smelting_time: 5
    },
    "Lithium Ingot": {
		requiredItems: {Lithium: 3, Coal: 6},
		output: {Lithium_Ingot: 1},
		smelting_time: 8
    },
    "Silver Ingot": {
        requiredItems: {Silver: 6, Coal: 3}, 
		output: {Silver_Ingot: 1},
		smelting_time: 10
    },
    "Nickel Ingot": {
		requiredItems: {Nickel: 7, Coal: 2}, 
		output: {Nickel_Ingot: 1},
		smelting_time: 15
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
import { miningItems } from "./data/miningItems.js"
import { smeltedItems } from "./data/smeltedItems.js"
import { consumableItems } from "./data/consumableItems.js"
import { smelterRecipes } from "./data/smelterRecipes.js"
export const globalInventory = {items:{}, value: 0, weight:0};
export const minerInventory = {items:{}, value: 0, weight:0};
export const consumablesInventory = {items:{}, value: 0, weight:0};
export const smelterInventory = {items:{}, value: 0, weight:0};

export function destroyBlock(blockType) {
	const blocks = blockType.instances();

	for (const block of blocks) {
		const hp = block.instVars.HP;

		if (hp <= 0) {
			block.destroy();
			block.Destroyed = true
		}
	}
}

//Inventory
export function addToInventory(inventory, item, quantity) {
	console.log(`${inventory}, ${item}, ${quantity}`)

    if (inventory.items[item.name]) {
        inventory.items[item.name] += quantity;
    } else {
        inventory.items[item.name] = quantity
    }
	inventory.value += (quantity * item.value)
	inventory.weight += (quantity * item.weight)
	
	console.log(`${quantity} ${item.name} added to inventory.`);
	console.log(inventory)
}
    


export function removeFromInventory(inventory, item, quantity) {
    if (inventory.items[item.name] && inventory.items[item.name] >= quantity) {
        inventory.items[item.name] -= quantity;

        if (inventory.items[item.name] === 0) {
            delete inventory.items[item.name];
        }
		
		inventory.value -= (quantity * item.value)
		inventory.weight -= (quantity * item.weight)
		

        console.log(`${quantity} ${item.name}(s) removed from inventory.`);
		console.log(inventory);
        return true;
    } else {
        console.log(`Not enough ${item.name} in inventory.`);
        return false;
    }
		
}

export function getInventory(inventory) {
    return inventory;
}

export function moveAllItems(sourceInventory, destinationInventory) {
    for (const [itemName, quantity] of Object.entries(sourceInventory.items)) {
        // Get item details from a predefined items list
        const item = miningItems[itemName];

        // Remove from source inventory
        const removed = removeFromInventory(sourceInventory, item, quantity);

        // If successfully removed, add to destination inventory
        if (removed) {
            addToInventory(destinationInventory, item, quantity);
        }
    }
}

// Function to move a specified quantity of a specific item
export function moveItemWithQuantity(sourceInventory, destinationInventory, itemName, quantity) {
    const item = miningItems[itemName];
    if (!item) {
        console.log(`Item ${itemName} does not exist in miningItems.`);
        return;
    }

    const removed = removeFromInventory(sourceInventory, item, quantity);
    if (removed) {
        addToInventory(destinationInventory, item, quantity);
    }
}


// Function to set text object with inventory
export function updateInventoryText(inventory) {
    let inventoryText = "";

    for (let item in inventory.items) {
        if (inventory.items.hasOwnProperty(item)) {
            inventoryText += `${item}: ${inventory.items[item]}\n`;
        }
    }

    inventoryText += `\nTotal Value: ${inventory.value}\nTotal Weight: ${inventory.weight}`;
    
}


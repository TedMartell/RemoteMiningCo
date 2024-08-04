import { miningItems } from "./data/miningItems.js"
import { consumableItems } from "./data/consumableItems.js"
import { inventoryItemTypes } from "./data/inventoryItemTypes.js";
export const globalInventory = {items:{}, value: 0, weight:0};
export const minerInventory = {items:{}, value: 0, weight:0};
export const consumablesInventory = {items:{}, value: 0, weight:0};

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

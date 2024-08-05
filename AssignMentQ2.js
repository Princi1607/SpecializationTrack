class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

function addItem(inventory, item) {
    inventory.push(item);
}

function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
    }
}

function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
}

function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}

function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];

console.log("Initial Inventory:");
printInventory(inventory);

addItem(inventory, new Item(3, 'Orange', 15, 0.7));
console.log("Adding item:");
printInventory(inventory);

updateItem(inventory, 2, { quantity: 30 });
console.log("Updating item:");
printInventory(inventory);

deleteItem(inventory, 2);
console.log("Deleting item:");
printInventory(inventory);

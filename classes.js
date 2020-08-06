const vehicles = [
  {
    make: "Ford",
    model: "Mustang",
  },
  {
    make: "Chrysler",
    model: "Jeep",
  },
  {
    make: "Dodge",
    model: "Ram",
  },
  {
    make: "Rover",
    model: "Range Rover",
  },
];

class NewDealership {
  constructor(cars) {
    this.inventory = cars;
  }

  // Get List of Cars in Inventory
  getInventory() {
    console.log("cars", this.inventory);
  }

  // Add Car to Inventory
  addCarToInventory(make, model) {
    this.inventory.push({ make, model });
  }

  // Remove Car from Inventory
  removeCarFromInventory(make, model) {
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].model === model) {
        this.inventory.splice(i, 1);
      }
    }
    console.log("This is New Inventory", this.inventory);
  }
}

const fordDealership = new NewDealership(vehicles);
console.log("Ford Dealership", fordDealership);

// fordDealership.addCarToInventory("Ford", "Viper");
// fordDealership.getInventory();
fordDealership.removeCarFromInventory("Rover", "Range Rover");

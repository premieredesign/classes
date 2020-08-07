class Inventory {
  constructor() {}

  cars = [
    {
      name: "Ford",
      model: "Mustang",
    },
    {
      name: "Ford",
      model: "F-150",
    },
    {
      name: "Ford",
      model: "Taurus",
    },
    {
      name: "Ford",
      model: "Fushion",
    },
    {
      name: "Ford",
      model: "Bronco",
    },
  ];

  // Get List of Inventory
  getInventory() {
    console.log("This is what we have", this.cars);
  }

  // Add to Inventory
  addToInventory(cars) {
    this.cars.push(cars);
  }

  // Remove from Inventory
  removeFromInventory(car) {
    const index = this.cars.findIndex((v) => v.model === car.model);
    this.cars.splice(index, 1);
  }
}

class RemoteInventory {}

class FordDealership extends Inventory {
  constructor() {
    super(); // Give me access to the Parent
    this.carInventory = this.cars;
  }

  getInventory() {
    return this.carInventory;
  }

  addToInventory(...car) {
    this.carInventory.push(...car);
    console.log("Ford New Cars", this.carInventory);
  }
}

class LincolnDealership extends Inventory {
  constructor() {
    super();
    super.addToInventory();
  }
}

// const inventory = new Inventory();
// const fordDealership = new FordDealership();
// const lincolnDealership = new LincolnDealership();
// inventory.getInventory();
// fordDealership.addToInventory({
//   name: "Ford",
//   model: "Viper",
// });
// fordDealership.addToInventory(
//   {
//     name: "Lincoln",
//     model: "Navigator",
//   },
//   {
//     name: "Lincoln",
//     model: "LX",
//   },
//   {
//     name: "Lincoln",
//     model: "LR",
//   }
// );
// lincolnDealership.removeFromInventory({
//   name: "Ford",
//   model: "Bronco",
// });

// Spread
const intructors = ["Clinton", "Henry"];

const students = {
  name: "Clinton",
  age: "40",
};

const printStudents = (students) => {
  const { name, age } = students;

  const sayName = () => console.log("My name", name);
  const sayAge = () => console.log("My age", age);
};
printStudents(students);

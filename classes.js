// Import
// Properties
// Constructor()
// Methods
// Export

// CRUD - Create, Read, Update, Delete

const fs = require("fs");
// import fs from 'fs';
class Employee {
  employeeDatabase = [];
  constructor() {
    // Create this when the Class get created
    // Or
    // Call this when Class get created
  }

  // Add Employee
  addNewEmployee(newEmployee) {
    let employeeObj = {
      id: this.employeeDatabase.length + 1,
      ...newEmployee,
    };
    this.employeeDatabase.push(employeeObj);
    fs.writeFile(
      "./employees.json",
      JSON.stringify(this.employeeDatabase),
      (err) => {
        if (err) {
          console.error("Err", err);
        }
      }
    );
    // console.log("New Employee(s) Add [+]", this.employeeDatabase);
  }

  findAllEmployeeWith(field, value) {
    // Look at what you have to work with i.e  (Parameter) and see what you can match/ find with within your database
    // i.e Apple Apples | Orange Oranges
    const employees = this.employeeDatabase.filter((x) => x[field] === value);
    // console.log("Here you go", employees);
  }

  getAllEmployeeInfo() {
    // Anytime something sasy all w/o specific, just return the whole dataset
    return this.employeeDatabase;
  }

  getSpecificEmployeeInfo(employeeId) {
    // Long Way
    // for (let i = 0; i < this.employeeDatabase.length; i++) {
    //   if (this.employeeDatabase[i].id === employeeId) {
    //     this.employeeDatabase[i];
    //   }
    // }

    // Short Way
    const employee = this.employeeDatabase.find((x) => x.id === employeeId);
    return employee;
  }

  updateEmployeeInfo(employeeId, field, newValue) {
    // Long Way
    // for (let i = 0; i < this.employeeDatabase.length; i++) {
    //   if (this.employeeDatabase[i].id === employeeId) {
    //     this.employeeDatabase[i][field] = newValue;
    //   }
    // }

    // Short Way
    const employee = this.getSpecificEmployeeInfo(employeeId);
    employee[field] = newValue;
    console.log("Updated To", this.employeeDatabase);
  }

  deleteEmployee(employId) {
    const index = this.employeeDatabase.findIndex((x) => x.id === employId);
    this.employeeDatabase.splice(index, 1);
    console.log("emp", employee);
  }
}

const employee = new Employee();
employee.addNewEmployee({
  firstName: "Clinton",
  lastName: "Johnson",
  title: "Cashier",
  status: "Active",
});
employee.addNewEmployee({
  firstName: "Britani",
  lastName: "Johnson",
  title: "Manager",
});
employee.addNewEmployee({
  firstName: "Jesse",
  lastName: "James",
  title: "Cashier",
});
// employee.findAllEmployeeWith("lastName", "Johnson");
// employee.updateEmployeeInfo(2, "title", "Manager");
// employee.updateEmployeeInfo(1, "lastName", "Edwards");
employee.deleteEmployee(1);

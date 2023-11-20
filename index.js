// Write your solution in this file!
const employee = {
    name: "Amanda",
    streetAddress: {
        street: "4807 Springtree Ln",
        city: "Sachse",
        state: "TX",
        zipCode: "75048",
    },
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    var newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

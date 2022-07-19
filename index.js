const employee = {
 /*[key]*/ name: 'Lari',
/* .value*/ streetAddress: '56 Main St'
}


// returning a new {} of a new employee non des
function updateEmployeeWithKeyAndValue(employee, key, value) { // three parametets
    const newEmployee = {...employee}; // spread to add and return new
    newEmployee[key] = value
    return newEmployee

}

// return mutated object passed in
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value 
    return employee
}

// delete and not mutate original
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;

}

console.log(destructivelyDeleteFromEmployeeByKey)
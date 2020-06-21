var employees = []

function Employee(name, jobTitle, salary){
    this.name = name
    this. jobTitle = jobTitle
    this. salary = salary
    this.status = "full time"
}

function printEmployeeForm(employee){
    console.log(employee)
}
var jack = new Employee("jack", "scientist", "200/hr")
var sally = new Employee("sally", "fortune-teller", "100/hr")
var saoirse = new Employee("Saoirse", "historian", "300/hr")
saoirse.status = "part time"

printEmployeeForm(jack)
printEmployeeForm(sally)
printEmployeeForm(saoirse)

employees.push(jack)
employees.push(sally)
employees.push(saoirse)
console.log(employees)
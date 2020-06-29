var form = document.getElementById("airline-form")
var submit = document.getElementById("submit-button")

function formAlert(){
    var firstName= form.elements["first-name"].value
    var lastName= form.elements["last-name"].value
    var age = form.elements["age"].value
    var gender= form.elements["gender"].value
    if(form.elements["paris"].checked) {
        var destination = document.getElementById("paris").value
    }
    if(form.elements["berlin"].checked) {
        destination = document.getElementById("berlin").value
    }
    if(form.elements["rome"].checked) {
        destination = document.getElementById("rome").value
    }
    var diet= []
    if(form.elements["vegetarian"].checked) {
        diet.push(document.getElementById("vegetarian").value)
    }
    if(form.elements["pescetarian"].checked) {
        diet.push(document.getElementById("pescetarian").value)
    }
    if(form.elements["kosher"].checked){
        diet.push(document.getElementById("kosher").value)
    }
    alert("First Name: " + firstName + "\nLast Name: " +lastName + "\nAge" + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDiet: " + diet)
}

submit.addEventListener("click", formAlert)
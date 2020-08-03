
//displays the whole list of todos
function getData(){
    axios.get("https://api.vschool.io/miastroud/todo")
        .then(response => createTodo(response.data))
        .catch(error => console.log(error))
}


//This displays all the todos as html elements with button and checkbox
const createTodo = (data) => {
    clearList()
    for(let i=0; i < data.length; i++){
        const h1 = document.createElement("h3")
        h1.textContent = data[i].title + " $" +  data[i].price + " " + data[i].description
        if(data[i].completed === true){
            h1.style.setProperty("text-decoration", "line-through")
        }
        document.getElementById("todo-list").appendChild(h1)
        const img = document.createElement("img")
        img.src = data[i].imgUrl
        img.style.width = "10%"
        img.style.height = "auto"
        document.getElementById("todo-list").appendChild(img)

        //addButtons
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = data[i].completed
        checkbox.name = "completed"
        document.getElementById("todo-list").appendChild(checkbox)
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "X"
        document.getElementById("todo-list").appendChild(deleteButton)
        
        // //put for the checkbox
        checkbox.addEventListener("change", function(){
            const completedUpdate = {
                completed: !data[i].completed
            }
            axios.put(`https://api.vschool.io/miastroud/todo/${data[i]._id}`, completedUpdate)
                .then(response => {
                    getData()
                })
                .catch(error => console.log(error))
        })
        
        //delete button to delete
        deleteButton.addEventListener("click", function(){
            axios.delete(`https://api.vschool.io/miastroud/todo/${data[i]._id}`)
                .then(response => getData())
                .catch(error => console.log(error))
        })
    }
}

//function to allow the item entered to the end without all the other todo's repeating themselves
function clearList(){
    const listDiv = document.getElementById("todo-list")
    //while there is a first child in the div, remove the first child:
    while(listDiv.firstChild){
        listDiv.removeChild(listDiv.firstChild)
    }
}

getData()


const todoForm = document["todo-form"]
//This adds a new todo to the list on form submit
todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imageurl.value
    }
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    axios.post("https://api.vschool.io/miastroud/todo", newTodo)
        .then(response => getData())
        .catch(error => console.log(error))
})




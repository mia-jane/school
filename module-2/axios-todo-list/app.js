
function getData(){
    axios.get("https://api.vschool.io/miastroud/todo")
        .then(response => createTodo(response.data))
        .catch(error => console.log(error))
}


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
        checkbox.name = "completed"
        checkbox.value = "completed"
        document.getElementById("todo-list").appendChild(checkbox)
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "X"
        document.getElementById("todo-list").appendChild(deleteButton)
    }
}

function clearList(){
    const listDiv = document.getElementById("todo-list")
    //while there is a first child in the div, remove the first child:
    while(listDiv.firstChild){
        listDiv.removeChild(listDiv.firstChild)
    }
}

getData()

const todoForm = document["todo-form"]

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

// const crossOut = (data) => {
//     for(i = 0; i < data.length; i++){
//         if (todoForm.elements["completed".checked]){
//             axios.put(`https://api.vschool.io/miastroud/todo/ `)
//         }
//     }
// }

// if(todoForm.elements["completed"].checked){
//     const crossedOff = {
//         completed: true
//     }
//     axios.put(`https://api.vschool.io/miastroud/todo/${sessionId}`, crossedOff)
//         .then(response => getData())
//         .catch(error => console.log(error))
// }
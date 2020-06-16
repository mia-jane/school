const form = document["addItem"]
form.addEventListener("submit", function() {
    event.preventDefault()
    //defining things
    const list = document.querySelector("ul#list")
    const ingredient = form.title.value

    //creating elements
    const itemList = document.createElement("li")
    //I think list should be empty here...
    const newItem = document.createElement("dev")
    newItem.textContent = ingredient

    const editButton = document.createElement("button")
    editButton.textContent = "edit"

    const xButton = document.createElement("button")
    xButton.textContent = "X"

    //appending.  list = ul, itemList = li, newItem = div
    list.append(itemList)
    itemList.append(newItem)
    itemList.append(editButton)
    itemList.append(xButton)
    
   
    form.title.value = " "
})
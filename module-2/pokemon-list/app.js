const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        //console.log(xhr.responseText)
        const jsonData = xhr.responseText
        const data = JSON.parse(jsonData)
        //console.log(data)
        const pokeNames = data.objects[0].pokemon
        console.log(pokeNames)
        listNames(pokeNames)
    }
}

function listNames(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name + " " + arr[i].resource_uri
        document.body.appendChild(h1)
    }
}

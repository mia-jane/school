function sum(a, b){
    if(typeof a === "number" && typeof b === "number"){
        return a + b
    }else {
        throw "this is an error"
    }
}
try {
    console.log(sum("2", "3"))
}
catch(err){
    console.log(err)
}

var user = {username: "sam", password: "123abc"}

function login(username, password){
    if(username === "sam" && password === "123abc"){
        console.log("login successful")
    }else{
        throw "username and password don't match"
    }
}

try {
    login("sam", "123abc")
}
catch(err){
    console.log(err)
}
try{
    login("sam", "muffins")
}
catch(err){
    console.log(err)
}
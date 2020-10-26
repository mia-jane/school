const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
//hash means to encrypt
//pre-save hook to encrypt user pw on signup
//the next middleware that is passed on to continue saving the user whenever this is done
userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) return next()  //makes sure that this is just happening on signup
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

//method to check encrypted pw on login
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err) //truthy meaning there is an error.  callback the callback fntn and pass it the error as the first argument
        return callback(null, isMatch) // falsey in that pw matched or it didn't (boolean)
    })
}

//method to remove user's pw for token/sending response to frontend
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)
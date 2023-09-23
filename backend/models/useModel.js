const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

UserSchema.statics.signup = async function(email,password){
    const exist = await this.findOne({email})
    if(exist){
        throw Error('Email Already in Use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email, password:hash})

    return user
}

module.exports = mongoose.model('Users',UserSchema)
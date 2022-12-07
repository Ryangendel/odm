const {Schema, model} = require("mongoose")

const DogSchema = new Schema(
    {
        dogName:{
            type: String, 
            trim:true, 
            required: "HEY MAKE SURE TO ENTET A DOGNAME"
        },
        dogAge:{
            type:Number,
            trim: true,
            required: "please make sure to add an age"
        },
        breed:{
            type:String, 
            trim:true
        }
    }
)

const Dog = model("Dog", DogSchema)

module.exports= Dog
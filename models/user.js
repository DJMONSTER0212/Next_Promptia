import { Schema,model,models } from "mongoose";

const userSchema = new Schema({
    email:{
        type: String,
        unique: [true,"Email already exist"],
        required:[true,"Email is required"]
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    }, 
    image:{
        type:String,
    }
})

// const User = mongoose.model("User",userSchema) this  we do with our regular express always on always running backend Server
// export default User

//  The "models" object is provided by the Mongoose
// Library and stores all the registered models.

// / If a model named "User" already exists in the
// "models" object, it assigns that existing model to
// the "User" variable.

// / This prevents redefining the model and ensures
// that the existing model is reused.

//     / If a model named "User" does not exist in the
// "models" object, the "model" function from mongoose
// is called to create a new model
// Feed
//     / The newly created model is then assigned to the
// "User" variable


const User = models.User|| model("User",userSchema)
export default User 
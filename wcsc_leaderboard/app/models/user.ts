import mongoose,{Document, Model, Schema} from "mongoose";
interface IUser extends Document{
    name: string;
    email: string;
    password?:string;
    id: string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
    name:{
        type: String,
        requred:true,
        
    },
    email :{
        type: String,
        requred:true,
        unique : true
        
    },
    
    password :{
        type: String,
        requred:false,
    },
    
})


const User: Model<IUser>= mongoose.models.User || mongoose.model<IUser>("User",UserSchema)

export default User;
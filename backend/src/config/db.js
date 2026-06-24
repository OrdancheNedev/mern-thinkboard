import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
    //    await mongoose.connect("mongodb+srv://ordanchenedev_db_user:learning_mongo_db@cluster0.irnorlx.mongodb.net/notes_db?appName=Cluster0")
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED SUCCESSFULLY!") 
    }
    catch(error){
        console.error("Error connecting to MONGODB", error)
        process.exit(1)
    }
}
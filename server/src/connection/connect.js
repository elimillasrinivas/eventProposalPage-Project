const mongoose=require("mongoose");
const env=require("dotenv");
env.config();
async function connection(){
    mongoose.set('strictQuery', true)
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connectod to Mongo")
    });
}
module.exports=connection;
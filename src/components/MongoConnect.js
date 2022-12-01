import mongoose from "mongoose";
const url = "mongodb://localhost:27017";
// async function MongoConnect(KeyValPair)
// {
//     const DbServer = new MongoClient(url);
    
//     //write try-catch construct to handle errors
//     try{
//         await DbServer.connect();
//         console.log("DB Connection Succesful");
        
//     } catch(e)
//     {
//         console.log(e);
//         console.log("DB Connection Failed");
//     } finally{
//         await DbServer.close();
//     }

    

// }


async function MongooseConnect()
{
    mongoose.connect("mongodb://localhost:27017/test1",{
        useNewUrlParser: true,
        useUnifiedTopolgy: true
    });

    mongoose.connection.on('connected',()=>{console.log("DB Connected succesfully");});
}

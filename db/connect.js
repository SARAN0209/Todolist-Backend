const mongoose = require ('mongoose');
 db = async() =>{
    try{
        await mongoose.connect("mongodb+srv://SaranC:Todolist@todolist.xmd6s3g.mongodb.net/Todolist?retryWrites=true&w=majority");
        console.log("Db connection Established")
    } catch(error){
        console.log('DB Error: ',error);
    }
}

module.exports = db;
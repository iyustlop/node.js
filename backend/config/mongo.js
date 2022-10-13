const mongoose = require("mongoose")

const dbConnect = () =>  {
    const DB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DATABASE}`
    console.log(DB_URI)
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err,res) => {
        if(!err){
            console.log('++++++ Conexion Correcta ++++++')
        } else {
            console.log('++++++ Conexion Error ++++++')
        }
    })
}

module.exports = dbConnect
const mongoose = require('mongoose')

const url = "mongodb+srv://franqhazard://admin:uK9pTsPGyVLII058@cluster0.eebrahl.mongodb.net/wallet_backend?retryWrites=true&w=majority"

async function connectDB() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
} 

module.exports = connectDB
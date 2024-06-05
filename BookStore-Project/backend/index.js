import express from "express"
import mongoose from "mongoose"
import { PORT, MongoDbURL } from "./config.js"
import { Book } from "./models/bookModel.js"

const app = express()


app.get("/", (req, res)=>{
    res.send("this si ")
})



///////////////////////////////////////////////// This was conventional way of adding items in the collection////////////////////////.
// const book1 = new Book({
//     title : "living like a professional in kaluga",
//     author : "Shul e menas girmenas shuwa hir",
//     publishYear : 2024
// })

// book1.save() this was the old method but now what we will do is that we will use postman for adding , updating, or removing
////////////////////////////////////////////////////////////////// ///////////////////////////////              /////////////////////////////////




mongoose.connect(MongoDbURL).then(()=>{
    console.log("Successfully connected to the database")
    // this will ensure that it will only run when you are connected to the database

    app.listen(PORT , ()=>{
        console.log(`Server started at port : ${PORT}`)
    })
}).catch(err=>console.log(err))


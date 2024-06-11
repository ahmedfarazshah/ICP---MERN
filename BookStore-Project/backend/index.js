import express, { response } from "express"
import mongoose from "mongoose"
import { PORT, MongoDbURL } from "./config.js"
import Book from "./models/bookModel.js"
import bookRouter from "./routes/bookRoute.js"
import cors from "cors"

const app = express()

// Middleware for parsing json body
app.use(express.json())

// Middleware for passing xml requests to frontend
//1. cors with default setting
// app.use(cors())
// allow custom origins 
app.use(cors({
    origin : "https://localhost:5000/books",
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders : ["Content-Type"]
}))

// app.use(cors({origin: "true", credentials: true}));


app.get("/", (req, res)=>{
    res.send(`Welcome to the Mern stack`)
    })
    
    
app.use("/books", bookRouter)
 

mongoose.connect(MongoDbURL).then(()=>{
    console.log("Successfully connected to the database")
    // this will ensure that it will only run when you are connected to the database

    app.listen(PORT , ()=>{
        console.log(`Server started at port : ${PORT}`)
    })
}).catch(err=>console.log(err))


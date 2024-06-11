import express from "express"

import Book from "../models/bookModel.js"

const router = express.Router()



///////////// Creating an entry
router.post('/', async (req, res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(500).send({message: `Send all required feilds : Title , Author , Publish-Year`})
        }
    const newbook = {
        title : req.body.title,
        author : req.body.author,
        publishYear: req.body.publishYear
    }
    const book  = await Book.create(newbook)
    return res.status(201).send(book) 

    } catch (error) {
        console.log(error)
        response.status(500).send({message: error})
    }
})

////// Getting all the books 

router.get("/", async (req,res)=>{
    try {
        const books = await Book.find({})
        return res.status(200).json(
            {
                count : books.length,
                data : books
            }
        )

    } catch (error) {
        res.status(500).send(error.message)
    }
})

//////// getting a book with an ids
router.get("/:id", async (req,res)=>{
    try {

        const id = req.params.id
        const book = await Book.findById(id)
        return res.status(200).json(book)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

///////// updating items in collection
// will replace the whole item but patch will only replace the indicated items
router.put("/:id", async(req, res)=>{
    try {
        const id = req.params.id
        const newfile = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear
        }

        const updatedBook = await Book.findByIdAndUpdate(id, newfile)
        
        return res.status(200).send(`Book sucessfully updated`)


    } catch (error) {
        res.status(500).send({message : error.message})
    }

})

///// deleting a item in the collection

router.delete("/:id", async(req, res)=>{

    try {
    const id = req.params.id
    
    const deleted = await Book.findByIdAndDelete(id)
    // if(!deleted){
    //     res.status(404).json({message : `Book not found!`})
    // }

    return res.status(200).send({message : `Book deleted successfully`})

    } catch (error) {
        console.log(error.message)
        res.status(500).send({message : error.message})
    }


})

export default router

///////////////////// Information

///////////////////////////////////////////////// This was conventional way of adding items in the collection////////////////////////.
// const book1 = new Book({
//     title : "living like a professional in kaluga",
//     author : "Shul e menas girmenas shuwa hir",
//     publishYear : 2024
// })

// book1.save() this was the old method but now what we will do is that we will use postman for adding , updating, or removing

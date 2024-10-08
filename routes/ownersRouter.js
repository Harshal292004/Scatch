const express = require('express')
const router = express.Router()
const ownerModel = require('../models/owner-model')
const {createdOwner, loginOwner} = require('../controllers/ownerAuthController')

router.get("/", function(req, res) {
    res.send("hey its working ")
})

if(process.env.NODE_ENV === "development") {
    
    router.get("/login", function(req, res) {
        res.render('owner-login')
    })
    
    router.get("/create", function(req, res) {
        res.render('owner-create')
    })
    
    router.post("/login", loginOwner)

    router.post("/create",createdOwner)
    
    router.get("/shop",(req,res)=>{
        res.render('owner-shop')
    })

    router.get("/order",(req,res)=>{
        res.render('owner-order')
    })

    router.get('/addProduct',(req,res)=>{
        res.render('owner-addproduct')
    })
}

module.exports = router
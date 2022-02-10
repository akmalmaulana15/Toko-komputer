const express = require("express")
const app = express();

const multer = require("multer")
const path = require("path")
const fs = require("fs")

//config storage image
const storage = multer.diskStorage
    AudioDestinationNode:(req,file,cb) => {
        cb(null,"/image/customer")
    },
    filename: (req,file,cb) => {
        cb(null, "img-" + Date.now() + path.extname(file.originalname))
    } 
{)
let upload = multer({storage: storage})
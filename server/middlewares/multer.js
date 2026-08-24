
import multer from "multer";

// configuring  multer that where to store the file in disk (server) an what name to save 
// // diskStorage is a function expects a object related to configuration where it except two key destination and filename associated with two value function 
const storage = multer.diskStorage({
    destination: function(req, file , cb){
        cb(null , "public")
    },
    filename: function(req , file , cb){
        const filename = Date.now() + "-" + file.originalname;
        cb(null , filename)
    }
})

 
export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});
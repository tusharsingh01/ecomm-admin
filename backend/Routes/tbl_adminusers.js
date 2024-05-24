const express = require('express')
const UserRouter = express.Router()
const {adminRegister} = require("../Controller/tbl_adminusers")
const {viewAdmin} = require("../Controller/tbl_adminusers")
const {updateAdmin} = require("../Controller/tbl_adminusers")
const {updateStatusActive,updateStatusDeactive} =require("../Controller/tbl_adminusers")

const upload = require('../Multer_image/Multer')



UserRouter.post('/post', upload.single('photo'), adminRegister)
UserRouter.get('/getdata', viewAdmin )
UserRouter.put('/api/updatedata/:uid', updateAdmin)

//status active or deactive//

UserRouter.patch("/status_active/:uid",updateStatusActive)
UserRouter.patch("/status_deactive/:uid", updateStatusDeactive)




module.exports = {UserRouter}
const express = require('express')
const SubcategoryRouter = express.Router()
const upload  = require("../Multer_image/Multer")

const { viewsubcategory, addsubcategory, updateSubcategory,viewcategory } = require('../Controller/tbl_adminsubcategory')





SubcategoryRouter.get('/api/admin/Subcategory/get', viewsubcategory)
SubcategoryRouter.get('/api/admin/category/getcategory', viewcategory)
SubcategoryRouter.post('/api/admin/Subcategory/post', upload.single('image'), addsubcategory)
SubcategoryRouter.put('/api/admin/Subcategory/put/:subcategory_id', updateSubcategory)



module.exports = {SubcategoryRouter}
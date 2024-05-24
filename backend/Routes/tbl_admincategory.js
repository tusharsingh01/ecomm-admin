const express = require('express')
const CategoryRouter = express.Router()
const{ viewCategory, addRegister, updateCategory } = require("../Controller/tbl_admincategory")




CategoryRouter.get('/api/admin/category/get', viewCategory)
CategoryRouter.post('/api/admin/category/post',addRegister )
CategoryRouter.put("/api/admin/category/updatecategory/:cid", updateCategory )

module.exports = {CategoryRouter}
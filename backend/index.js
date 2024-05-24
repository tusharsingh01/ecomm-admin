const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
const PORT=4000

const {UserRouter} = require('./Routes/tbl_adminusers')
app.use('/',UserRouter);

const {CategoryRouter} = require('./Routes/tbl_admincategory')
app.use('/',CategoryRouter);

const {SubcategoryRouter} = require('./Routes/tbl_adminsubcategory')
app.use('/',SubcategoryRouter)

app.use(express.static('Public'))

const {AdminRoleRouter} = require('./Routes/tbl_adminrole')
app.use('/',AdminRoleRouter)

const {Adminroleassign} = require('./Routes/tbl_adminrole_assign')
app.use('/',Adminroleassign)

app.use(express.static("Public"))




app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}...`)
})
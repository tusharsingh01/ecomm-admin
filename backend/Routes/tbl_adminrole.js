const express = require('express');
const { getRoles, postRoles, updateRoles  } = require('../Controller/tbl_adminrole');

const AdminRoleRouter = express.Router();

AdminRoleRouter.get("/api/admin/role/get", getRoles);
AdminRoleRouter.post("/api/admin/role/post",postRoles);
AdminRoleRouter.put("/api/admin/role/put/:roleid",updateRoles);




module.exports ={AdminRoleRouter};

const express = require('express')

const { AddRoleassign, getAdminRoleAssign, revokeRole} = require('../Controller/tbl_adminrole_assign');
const Adminroleassign = express.Router();





 Adminroleassign.post("/api/admin/roleassign/Addroleassign", AddRoleassign)
 Adminroleassign.get("/api/admin/roleassign/getadminroleassign/:uid", getAdminRoleAssign)
 Adminroleassign.delete("/api/admin/roleassign/revokeRole/:uid/:roleid",revokeRole)


 module.exports = {Adminroleassign}
const connection = require("../Model/model");




const AddRoleassign = async (req, res) => {
  try {
    // const data = [req.body.uid, req.body.role_id];
    const data = req.body
    const sqlQuery = `INSERT INTO tbl_adminrole_assign set ? `;
    await connection.query(sqlQuery, data, function (error, result) {
      if (error) {
        console.log("Error", error.sqlMessage);
        res.status(500).json(error.sqlMessage);
      } else {
        
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.log("Error", error.sqlMessage);
    res.status(500).json(error.sqlMessage);
  }
};

const getAdminRoleAssign = async (req, res) => {
  try {
    const uid = req.params.uid;
    const sqlQuery = 'select rolename from tbl_adminrole where roleid IN(select roleid from tbl_adminrole_assign where uid=?)'
    await connection.query(sqlQuery, uid, function (error, result) {
      if (error) {
        console.log("Error", error.sqlMessage);
        res.status(500).json(error.sqlMessage);
      } else {
        res.status(200).json(result);
        
      }
    });
  } catch (error) {
    console.log("Error", error.sqlMessage);
    res.status(500).json(error.sqlMessage);
  }
};


const revokeRole = async (req, res) => {
  try {
      const data = [req.params.uid, req.params.roleid];
      const sqlQuery = 'DELETE FROM tbl_adminrole_assign WHERE uid = ? AND roleid = ?';
      await connection.query(sqlQuery, data, function (error, result) {
          if (error) {
              console.log("Error", error.sqlMessage);
              res.status(500).json(error.sqlMessage);
          } else {
              res.status(200).json({ message: `Role revoked successfully for uid: ${req.params.uid}, roleid: ${req.params.roleid}` });
          }
      });
  } catch (error) {
      console.log("Error", error.message);
      res.status(500).json(error.message);
  }
};

module.exports = { AddRoleassign, getAdminRoleAssign,revokeRole };
const connection = require("../Model/model");



const getRoles = async (req, res) => {
    try {
        let sqlQuery = "SELECT * FROM tbl_adminrole";
        
        await connection.query(sqlQuery, (error, result) => {
            if (error) {
                console.log("Error:", error.sqlMessage);
                res.status(500).json({ error: "Failed to fetch role" });
            } else {
                res.json(result);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

//post data// 
const postRoles = (req, res) => {
    const data ={
            roleid: req.body.roleid,
            rolename: req.body.rolename
    } 
  
    const insertQuery = `
      INSERT INTO  tbl_adminrole SET ?
    `;
  
    connection.query(insertQuery, data, (err, results) => {
      if (err) {
        console.error('Error creating data:', err);
        return res.status(500).json({ error: 'An error occurred while creating the data.' });
      }
  
      return res.status(201).json({ message: 'data created successfully!' });
    });
  };

//update data//

const updateRoles = async (req, res) => {
    try {
       
       const {rolename,roleid} = req.body;
    //    console.log(data)
    //    const roleid = req.params.roleid;
        const sqlQuery = "UPDATE tbl_adminrole SET rolename = ?  WHERE  roleid = ?";

        await connection.query(sqlQuery, [rolename,roleid], (error, result) => {
            if (error) {
                console.error("Database Error:", error);
                return res.json({ error: "roles update failed" });
            } else {
                if (result.affectedRows === 0) {
                    return res.status(404).json({ error: "roles not found" });
                }
                res.json({ message: "roles updated successfully" });
            }
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.json({ error: "Server error" });
    }
};




module.exports = { getRoles,postRoles,updateRoles};
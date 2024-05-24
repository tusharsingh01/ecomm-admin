const connection = require("../Model/model");

//////get api////

const viewCategory = async(req,res)=>{
    try{
           
            const sqlQuery="SELECT * FROM  tbl_admincategory "
    await connection.query(sqlQuery, function(error,result){
            if(error){
                    console.log("Error", error.sqlMessage)
                    res.status(500).json({ error: error.sqlMessage });
            } else{
                    console.log(result)
                    res.json(result)
            }
    })
    }catch(error){
            console.log("Error", error.sqlMessage)
            res.status(500).json({ error: error.sqlMessage });
    }

}

///post api///

const addRegister = (req, res) => {
        const data ={
                cid: req.body.cid,
                cname: req.body.cname
        } 
      
        const insertQuery = `
          INSERT INTO tbl_admincategory SET ?
        `;
      
        connection.query(insertQuery, data, (err, results) => {
          if (err) {
            console.error('Error creating data:', err);
            return res.status(500).json({ error: 'An error occurred while creating the data.' });
          }
      
          return res.status(201).json({ message: 'data created successfully!' });
        });
      };


      //updatecategory//

      const updateCategory = async (req, res) => {
        try {
           
           const data = req.body;
           const cid = req.params.cid;
            const sqlQuery = "UPDATE tbl_admincategory SET ?  WHERE cid = ?";
    
            await connection.query(sqlQuery, [data,cid], (error, result) => {
                if (error) {
                    console.error("Database Error:", error);
                    return res.json({ error: "Category update failed" });
                } else {
                    if (result.affectedRows === 0) {
                        return res.status(404).json({ error: "Category not found" });
                    }
                    res.json({ message: "Category updated successfully" });
                }
            });
        } catch (error) {
            console.error("Server Error:", error);
            res.json({ error: "Server error" });
        }
    };
    


module.exports = {viewCategory, addRegister, updateCategory};
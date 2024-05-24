const connection = require("../Model/model");


//get api//
const viewsubcategory = async (req, res) => {
    try {
        const sqlQuery = "SELECT * FROM tbl_adminsubcategory";
        connection.query(sqlQuery, function (error, result) {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal server error" });
            }
            console.log("Query executed successfully:", result);
            res.json(result);
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


const viewcategory = async (req, res) => {
    try {
        const sqlQuery = "SELECT * FROM tbl_admincategory";
        connection.query(sqlQuery, function (error, result) {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal server error" });
            }
            console.log("Query executed successfully:", result);
            res.json(result);
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


const addsubcategory = (req, res) => {

    const data = {
        cid:req.body.cid,
        subcategory_id:req.body.subcategory_id,
        subcategory_name:req.body.subcategory_name,
        image:req.file.filename
    };
    console.log(req.body);
    const insertQuery = 'INSERT INTO tbl_adminsubcategory SET ?';
    connection.query(insertQuery, data, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        } else {
            return res.status(201).json({ message: 'Data created successfully!' });
        }
    });
};



//   module.exports = {
//     addsubcategory,
//   };



///update api//

const updateSubcategory = async (req, res) => {
    try {

        const data = req.body;
        //    const cid = req.params.cid;
        const subcategory_id = req.params.subcategory_id;
        const sqlQuery = "UPDATE tbl_adminsubcategory SET ?  WHERE subcategory_id = ?";

        await connection.query(sqlQuery, [data, subcategory_id], (error, result) => {
            if (error) {
                console.error("Database Error:", error);
                return res.json({ error: "Subcategory update failed" });
            } else {
                if (result.affectedRows === 0) {
                    return res.status(404).json({ error: "Subcategory not found" });
                }
                res.json({ message: "Subcategory updated successfully" });
            }
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.json({ error: "Server error" });
    }
};



// export karenge module//
module.exports = { viewsubcategory, addsubcategory, updateSubcategory, viewcategory };

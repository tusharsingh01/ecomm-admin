const connection = require("../Model/model");




////////////////GET Method///////////////////////
const viewAdmin = (req, res) => {
    const selectQuery = `SELECT * FROM tbl_adminusers`;
  
    connection.query(selectQuery, (err, results) => {
      if (err) {
        console.error('Error fetching admin users:', err);
        return res.status(500).json({ error: 'An error occurred while fetching admin users.' });
      }
  
      return res.status(200).json({ adminUsers: results });
    });
  };



  ////////////////// post create offer ////////////////////////

const adminRegister = (req, res) => {
  const data = {
    uid : req.body.uid,
    name : req.body.name,
    email : req.body.email,
    password : req.body.password,
    mobile : req.body.mobile, 
    photo : req.file.filename,
    adhar_card : req.body.adhar_card,
    doj : req.body.doj,
    qualification : req.body. qualification,
    dob: req.body.dob,
    address : req.body. address,
    state : req.body. state,
    city : req.body.city,
    pin : req.body.pin,
    status : req.body.status,
    country : req.body.country

  };

  const insertQuery = `
    INSERT INTO tbl_adminusers SET ?
  `
  let imageData = {image:null};
  if (req.file && req.file.filename){
    imageData.image = req.file.filename;
  }

  connection.query(insertQuery, data, (err, results) => {
    if (err) {
      console.error('Error creating offer:', err);
      return res.status(500).json({ error: 'An error occurred while creating the offer.' });
    }

    return res.status(201).json({ message: 'Offer created successfully!' });
  });
};
////////////////////////////put method///////////////////////////////////////

const updateAdmin = async (req, res) => {
    try {
      let sqlQuery = "UPDATE tbl_adminusers SET name = ?, email = ?, qualification = ?, address = ? WHERE uid = ?";
      let Data = [req.body.name, req.body.email, req.body.qualification, req.body.address, req.params.uid];
  
      await connection.query(sqlQuery, Data, function (error, result) {
        if (error) {
          console.log("Error", error.sqlMessage);
          res.json({ error: 'Internal server error' });
        } else {
          res.json({ message: 'User updated successfully' });
        }
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
////update  user status active//

const updateStatusActive = async (req, res) => {
  const sqlQuery = "UPDATE tbl_adminusers SET status = 'active' where uid = ?"
  const uid = req.params.uid;
  console.log(uid)
  await connection.query(sqlQuery, [uid], (err, result)=> {
    if (err) return res.json({status: false, Error: "Querry error", error: err.sqlMessage})
      else return res.json({status: true, Message: "User Active", result})
  })
}

//update user status deactive//
const updateStatusDeactive = async (req, res) => {
  const sqlQuery = "UPDATE tbl_adminusers SET status = 'deactive' where uid = ?"
  const uid = req.params.uid;
  console.log(uid)
  await connection.query(sqlQuery, [uid], (err, result)=> {
    if (err) return res.json({status: false, Error: "Querry error", error: err.sqlMessage})
      else return res.json({status: true, Message: "User Deactive", result})
  })
}


////////////////////////////////////////////////////////////////  

module.exports={adminRegister , viewAdmin ,  updateAdmin,updateStatusActive, updateStatusDeactive };
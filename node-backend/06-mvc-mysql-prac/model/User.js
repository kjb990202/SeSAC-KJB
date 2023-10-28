const mysql = require("mysql");



const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "tank1253!",
  database: "sesac_test1",
});




exports.getUsers = (cb) => {
  conn.query(`SELECT * FROM user`, (err, rows) => {
  
    if (err) {
      throw err;
    }

    console.log("user", rows);
    cb(rows);
  });
};

exports.insertUser = (data, cb) => {
 
  const sql = `insert into user (username, comment) values ('${data.username}', '${data.comment}')`;

  conn.query(sql, (err, result) => {
   
    if (err) {
      throw err;
    }

    console.log("user insert", result);
    cb(result.insertId);
  });
};

exports.delUser = (id, cb) => {
  const sql = `delete from user where id = ${id}`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    let flag = false;
    if (result.affectedRows) {
      flag = true;
    }

    console.log("user delete", result);
    cb(flag);

  });
};



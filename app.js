const express = require("express");
const cors = require("cors");
const redis = require("redis");
const mysql = require("mysql2");
const config = require("./config.js");

const app = express();
app.use(cors());

// generate response
function genResponse(code, data = null) {
  const errnoMap = {
    0: "success",
    1001: "mysql error",
    1002: "redis error",
  };

  const msg = errnoMap[code] || "unknown error";
  return { code, msg, data };
}

app.get("/", (req, res) => {
  const client = redis.createClient(config.redis);
  client.on("error", (err) => {
    console.info("object", err);
    return res.json(genResponse(1002));
  });

  // increment
  client.incr("count", (err, val) => {
    const str = "tht count value is: " + val;
    return res.json(genResponse(0, str));
  });
});

app.get("/users", (req, res) => {
  const db = mysql.createConnection(config.mysql);
  const sql = "select * from `users`";
  db.query(sql, (err, results, fields) => {
    if (err) {
      console.log("err:", err);
      return res.json(genResponse(1001));
    }
    return res.json(genResponse(0, results));
  });
});

// error handler
// app.use((err, req, res) => res.json({ code: 500, msg: "server error" }));

app.listen(config.port, () =>
  console.log("Server is started on port " + config.port)
);

const express = require("express");
const cors = require("cors");
const redis = require("redis");
const mysql = require("mysql2");
const config = require("./config.js");
require("express-async-errors");

const app = express();
const router = express.Router();

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

router.get("/", (req, res) => {
  const client = redis.createClient(config.redis);
  client.on("error", (err) => {
    console.info("redis onerror:", err);
    return res.json(genResponse(1002));
  });

  // increment
  client.incr("count", (err, val) => {
    const str = "tht count value is: " + val;
    return res.json(genResponse(0, str));
  });
});

router.get("/users", (req, res) => {
  const db = mysql.createConnection(config.mysql);
  const sql = "select * from `users`";
  db.query(sql, (err, results, fields) => {
    return res.json(genResponse(0, results));
  });
});

// cors
app.use(cors());

// routers
app.use(router);

// error handler
app.use((err, req, res, next) => {
  res.send(genResponse(1003, err.message));
});

// start server
app.listen(config.port, () => {
  console.log("Server is started on port " + config.port);
});

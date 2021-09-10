"use strict";

module.exports = {
  // server port
  port: 5555,

  // redis server
  redis: {
    host: "localhost",
    port: "6379",
    password: "123456",
    connect_timeout: 3000,
  },

  // mysql server
  mysql: {
    host: "localhost",
    password: "root",
    port: 3306,
    user: "root",
    database: "mytest",
  },
};

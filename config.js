"use strict";

module.exports = {
  // server port
  port: 5555,

  // redis server
  redis: {
    host: "dce_redis", // docker-compose.yaml 中 redis 服务的的 container_name
    port: "6379",
    password: "123456",
    connect_timeout: 3000,
  },

  // mysql server
  mysql: {
    host: "dce_mysql", // docker-compose.yaml 中 mysql 服务的 container_name
    password: "root",
    port: 3306,
    user: "root",
    database: "mytest",
  },
};

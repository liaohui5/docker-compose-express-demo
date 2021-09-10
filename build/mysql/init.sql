SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- create database `mytest`
-- ----------------------------
DROP DATABASE IF EXISTS `mytest`;
CREATE DATABASE `mytest` DEFAULT CHARSET="utf8mb4";

use `mytest`;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `username` varchar(16) DEFAULT NULL COMMENT '用户名',
  `email` varchar(32) DEFAULT NULL COMMENT '邮箱',
  `password` char(32) DEFAULT NULL COMMENT '密码',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'tom', 'tom@qq.com', '123456', NULL);
INSERT INTO `users` VALUES (2, 'jerry', 'jerry@qq.com', '123456', NULL);
INSERT INTO `users` VALUES (3, 'jacky', 'jacky@qq.com', '123456', NULL);
INSERT INTO `users` VALUES (4, 'alex', 'alex@qq.com', '123456', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;


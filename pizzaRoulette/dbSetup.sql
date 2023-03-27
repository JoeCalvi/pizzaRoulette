CREATE TABLE IF NOT EXISTS accounts(
  id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
  name varchar(255) COMMENT 'User Name',
  email varchar(255) COMMENT 'User Email',
  picture varchar(255) COMMENT 'User Picture'
) default charset utf8 COMMENT '';

create TABLE IF NOT EXISTS toppings(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'Topping Id',
  name VARCHAR(100) NOT NULL COMMENT 'Topping Name',
  type VARCHAR(50) NOT NULL COMMENT 'Topping Category'
) default charset utf8 COMMENT '';

INSERT INTO toppings
(name, type)
VALUES
("Peanuts", "Nut");
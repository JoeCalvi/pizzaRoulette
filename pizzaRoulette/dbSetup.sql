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
("Shredded Carrots", "Vegetable");

ALTER TABLE toppings
ADD traditional BOOLEAN COMMENT 'Is Traditional Topping';

create TABLE IF NOT EXISTS pizzas(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'Pizza Id',
  toppings int NOT NULL COMMENT 'Amount of Toppings'
) default charset utf8 COMMENT '';

DROP TABLE pizzas;

create TABLE IF NOT EXISTS pizzaToppings(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'PizzaTopping Id',
  toppingId INT NOT NULL COMMENT 'Topping Id',
  pizzaId INT NOT NULL COMMENT 'Pizza Id',

  FOREIGN KEY (toppingId) REFERENCES toppings(id) ON DELETE CASCADE,
  FOREIGN KEY (pizzaId) REFERENCES pizzas(id) ON DELETE CASCADE
) default charset utf8 COMMENT '';

DROP TABLE pizzaToppings;

CREATE TABLE IF NOT EXISTS favorites(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'Favorite Id',
  accountId VARCHAR(255) NOT NULL COMMENT 'Account Id',
  pizzaId INT NOT NULL COMMENT 'Pizza Id',
  name VARCHAR(30) NOT NULL COMMENT 'Favorite Name',
  toppings INT NOT NULL COMMENT 'Amount of Toppings',

  FOREIGN KEY (accountId) REFERENCES accounts(id) ON DELETE CASCADE,
  FOREIGN KEY (pizzaId) REFERENCES pizzas(id) ON DELETE CASCADE
) default charset utf8 COMMENT '';

DROP TABLE favorites;
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
  sauceId INT COMMENT 'Sauce Id',
  cheeseId INT COMMENT 'CheeseId',
  toppingOneId INT COMMENT 'First Topping Id',
  toppingTwoId INT COMMENT 'Second Topping Id',
  toppingThreeId INT COMMENT 'Third Topping Id',
  toppingFourId INT COMMENT 'Fourth Topping Id',
  toppingFiveId INT COMMENT 'Fifth Topping Id',

  FOREIGN KEY (sauceId) REFERENCES toppings(id),
  FOREIGN KEY (cheeseId) REFERENCES toppings(id),
  FOREIGN KEY (toppingOneId) REFERENCES toppings(id),
  FOREIGN KEY (toppingTwoId) REFERENCES toppings(id),
  FOREIGN KEY (toppingThreeId) REFERENCES toppings(id),
  FOREIGN KEY (toppingFourId) REFERENCES toppings(id),
  FOREIGN KEY (toppingFiveId) REFERENCES toppings(id)
) default charset utf8 COMMENT '';

DROP TABLE pizzas;
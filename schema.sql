/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/
CREATE DATABASE groceries;

USE groceries;

CREATE TABLE groceries (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  quantity INT(3),
  purchased INT(1)
);

INSERT INTO groceries (name, quantity, purchased) VALUES ('Yellow Onions', 6, 1);
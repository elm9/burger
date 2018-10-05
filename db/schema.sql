DROP DATABASE IF EXISTS burgers_DB;
CREATE DATABASE burgers_DB;
USE burgers_DB;

CREATE TABLE burgers
(
    id INTEGER
    AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR
    (40) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);


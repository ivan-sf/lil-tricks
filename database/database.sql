CREATE DATABASE project_norman_osborn_v0_1;

USE project_norman_osborn_v0_1;

CREATE TABLE tricks(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(300),
    image VARCHAR(300),
    link VARCHAR(200),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

DESCRIBE tricks;
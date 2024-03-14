CREATE DATABASE IF NOT EXISTS fin_finder;

USE fin_finder;

CREATE TABLE IF NOT EXISTS fishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    scientificName VARCHAR(255) UNIQUE NOT NULL,
    decimalLatitude DECIMAL(8, 6) NOT NULL,
    decimalLongitude DECIMAL(9, 6) NOT NULL,
    locality VARCHAR(255) NOT NULL,
    depth INT,
    depthAccuracy DECIMAL(10, 10) ,
    description MEDIUMTEXT,
    image VARCHAR(255) NOT NULL,
    area ENUM("north-atlantic", "south-atlantic", "indian", "north-pacific", "south-pacific")
);
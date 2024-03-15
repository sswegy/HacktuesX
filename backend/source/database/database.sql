CREATE DATABASE IF NOT EXISTS fin_finder;

USE fin_finder;

CREATE TABLE IF NOT EXISTS fishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    scientificName VARCHAR(255) NOT NULL,
    decimalLatitude DECIMAL(9, 6) NOT NULL,
    decimalLongitude DECIMAL(9, 6) NOT NULL,
    locality VARCHAR(255) NOT NULL,
    depth INT,
    depthAccuracy VARCHAR(255),
    description MEDIUMTEXT,
    image MEDIUMTEXT NOT NULL,
    area VARCHAR(255) NOT NULL
);
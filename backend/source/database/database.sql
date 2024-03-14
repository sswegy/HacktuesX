CREATE DATABASE IF NOT EXISTS fin_finder;

CREATE TABLE IF NOT EXISTS fishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    scientificName VARCHAR(255) UNIQUE NOT NULL,
    decimalLatitude DECIMAL(4, 10) NOT NULL,
    decimalLongitude DECIMAL(4, 10) NOT NULL,
    locality VARCHAR(255) NOT NULL,
    depth INT,
    depthAccuracy DECIMAL(2, 2) 
)
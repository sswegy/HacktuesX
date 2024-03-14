import productRoutes from './source/routes/fishRouter.js';
import express from "express"
import pool from './source/database/database.js';
const app = express();
const port = 8080;

app.use('/', productRoutes);

function kur()
{
const examples = [
    { scientificName: 'ExampleFish1', decimalLatitude: 51.5074, decimalLongitude: -0.1278, locality: 'London', depth: 10, depthAccuracy: 0.5 },
    { scientificName: 'ExampleFish2', decimalLatitude: 40.7128, decimalLongitude: -74.0060, locality: 'New York', depth: 20, depthAccuracy: 0.7 }
  ];

  
const insertQuery = 'INSERT INTO fishes (scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy) VALUES ?';
// Execute the insert query with the examples data
pool.query(insertQuery, [examples.map(Object.values)])
    .then((result) => {
        console.log('Inserted', result[0].affectedRows, 'example records into fishes table');
        // Close the connection pool
        pool.end()
            .then(() => console.log('Connection pool closed'))
            .catch((err) => console.error('Error closing connection pool:', err));
    })
    .catch((err) => console.error('Error inserting records:', err));
}

app.listen(
    port,
    () => console.log("SERVER ALLIVE!!"),
     // Insert example records into fishes table
    kur()
)

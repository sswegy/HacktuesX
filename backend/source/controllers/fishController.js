import pool from "../database/database.js"


// GET
 async function getFishes() {
    const [results] = await pool.query("SELECT * FROM fishes")
    return results
}

async function getFishByID(id) {
    const [result] = await pool.query("SELECT * FROM fishes WHERE id = ?", [id])
    return result[0]
}

// POST
async function createFish(scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy, description, image, area) {
    const result = await pool.query(
        "INSERT INTO fishes (scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy, description, image, area) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy, description, image, area]
    )
    return result
}

// PUT
async function updateFishByID(id, scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy) {
    const result = await pool.query(
        "UPDATE fishes SET scientificName = ?, decimalLatitude = ?, decimalLongitude = ?, locality = ?, depth = ?, depthAccuracy = ? WHERE id = ?",
        [scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy, id]
    )
    return result
}

// Exporting the functionse
export default createFish
import pool from "../database/database.js";

// GET FISHES
export async function getFishes() {
    const [results] = await pool.query("SELECT * FROM fishes")
    return results
}

export async function getFishByID(id) {
    const [result] = await pool.query("SELECT * FROM fishes WHERE id = ?", [id])
    return result[0]
}

// POST
export async function createFish(scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy) {
    const result = await pool.query(
        "INSERT INTO fishes (scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy) VALUES (?, ?, ?, ?, ?, ?)",
        [scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy]
    )
    return result
}

// PUT
export async function updateFishByID(id, scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy) {
    const result = await pool.query(
        "UPDATE fishes SET scientificName = ?, decimalLatitude = ?, decimalLongitude = ?, locality = ?, depth = ?, depthAccuracy = ? WHERE id = ?",
        [scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy, id]
    )
    return result
}
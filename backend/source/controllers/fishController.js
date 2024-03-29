import pool from "../database/database.js"


// GET
export async function getFishes() {
    const [results] = await pool.query("SELECT * FROM fishes")
    return results
}

export async function getFishByID(id) {
    const [result] = await pool.query("SELECT * FROM fishes WHERE id = ?", [id])
    return result[0]
}

export async function getFishByArea(area) {
    const query = `SELECT * FROM fishes WHERE area = ? LIMIT 50`

    let [result] = await pool.query(query, [area])
    result = result.filter((item, index) => result.findIndex(obj => obj.scientificName === item.scientificName) === index);

    return result
}

export async function getCommonFishOrder(area, type) {
    const query = `SELECT DISTINCT scientificName, COUNT(*) AS occurrences FROM fishes WHERE area = ? GROUP BY scientificName ORDER BY occurrences ? LIMIT 50`
    
    const [result] = await pool.query(query, [area, type])
    return result
}

export async function getAlphabeticalFishOrder(area, type) {
    const query = `SELECT DISTINCT scientificName FROM fishes WHERE area = ? ORDER BY scientificName ? LIMIT 50`
    
    const [result] = await pool.query(query, [area, type])
    return result
}

export async function getFishByDepthRange(area, fromDepth, toDepth, type) {
    let query = `SELECT DISTINCT scientificName, depth FROM fishes WHERE area = ?`
    const params = [area]

    if (fromDepth !== undefined && toDepth !== undefined) {
        query += ` AND depth BETWEEN ? AND ?`
        params.push(fromDepth, toDepth)
    }
    query += ` ORDER BY depth ? LIMIT 50`
    params.push(type)

    const [result] = await pool.query(query, params)
    return result
}

export async function getFishByDepth(area, type) {
    const query = `SELECT DISTINCT scientificName, depth FROM fishes WHERE area = ? ORDER BY depth ? LIMIT 50`
    const [result] = await pool.query(query, [area, type])
    return result
}

export async function getAreasAndFishByName(name) {
    const query_area = "SELECT area FROM fishes WHERE scientificName = ?"
    const query_fish = "SELECT * FROM fishes WHERE scientificName = ? LIMIT 1"
    
    let [result_area] = await pool.query(query_area, [name])
    result_area = result_area.filter((item, index) => result_area.indexOf(item) === index);

    let [result_fish] = await pool.query(query_fish, [name])

    return [result_area, result_fish[0]]
}

// POST
export async function createFish(scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy, description, image, area) {
    const result = await pool.query(
        "INSERT INTO fishes (scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy, description, image, area) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy, description, image, area]
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

export default createFish;
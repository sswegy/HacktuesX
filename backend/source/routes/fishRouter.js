import express from "express"
import { getFishes, getFishByID, createFish, updateFishByID } from "../controllers/fishController.js"


const router = express.Router()


// GET
router.get("/", async (req, res) => {
    const fishes = await getFishes()
    res.status(200).send("fishes")
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const fish = await getFishByID(id)

    if (!fish)
        return res.status(404).send({ message: "Fish not found" })

    res.status(200).send(fish)
})

// POST
router.post("/", async (req, res) => {
    const { scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy } = req.body
    const result = await createFish(scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy)

    res.status(200).send({ message: "Fish created successfully" })
})

// PUT
router.put("/:id", async (req, res) => {
    const id = req.params.id
    const { scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy } = req.body
    const result = await updateFishByID(id, scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy)

    res.status(200).send({ message: "Fish updated successfully" })
})


export default router
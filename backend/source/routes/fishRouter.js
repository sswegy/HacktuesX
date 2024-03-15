import express from 'express';
import {
    getFishes,
    getFishByID,
    getCommonFishOrder,
    getAlphabeticalFishOrder,
    getFishByDepthRange,
    getFishByDepth,
    createFish,
    updateFishByID,
    getAreasAndFishByName
} from '../controllers/fishController.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const fishes = await getFishes();
        res.json(fishes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/id/:id', async (req, res) => {
    try {
        const fish = await getFishByID(req.params.id);
        res.json(fish);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/common', async (req, res) => {
    try {
        const { area, type } = req.query;
        const commonFishOrder = await getCommonFishOrder(area, type);
        res.json(commonFishOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/alphabetical', async (req, res) => {
    try {
        const { area, type } = req.query;
        const alphabeticalFishOrder = await getAlphabeticalFishOrder(area, type);
        res.json(alphabeticalFishOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/depth', async (req, res) => {
    try {
        const { area, fromDepth, toDepth, type } = req.query;
        const fishByDepthRange = await getFishByDepthRange(area, fromDepth, toDepth, type);
        res.json(fishByDepthRange);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/byDepth', async (req, res) => {
    try {
        const { area, type } = req.query;
        const fishByDepth = await getFishByDepth(area, type);
        res.json(fishByDepth);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/areaFishByName/:name', async (req, res) => {
    try {
        const {name} = req.params.name
        const areasFish = await getAreasAndFishByName(name)
        res.json(areasFish);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/fishes', async (req, res) => {
    try {
        const { scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy, description, image, area } = req.body;
        const result = await createFish(scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy, description, image, area);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy } = req.body;
        const result = await updateFishByID(id, scientificName, decimalLatitude, decimalLongitude, locality, depth, depthAccuracy);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;

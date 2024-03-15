import fs from 'fs'
import getImageAndDescription from './infoFinder.js'
import coordinates from '../../data/coordinates.js'
import turf from "turf"
import booleanPointInPolygon from '@turf/boolean-point-in-polygon'
import createFish from '../controllers/fishController.js'
import { type } from 'os'
import { unsubscribe } from 'diagnostics_channel'


fs.readFile('./backend/data/extractedData.json', 'utf8',async (err, data) => {
    
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        
    console.time("dbstart");    
        
        const jsonData = JSON.parse(data);
        const arr = Array.from(jsonData);
        for(let i = 0; i < jsonData.length; i++)
        {
            
            
            for(const key in coordinates)
            {   
                if( pointInsidePolygon( jsonData[i]["decimalLatitude"],jsonData[i]["decimalLongitude"],coordinates[key]))
                {
                   
                    console.log(jsonData[i]["scientificName"]," in ",key);
                    
                    let obj = jsonData[i]
                    let item = await getImageAndDescription(obj.scientificName)
        
                    if (item && typeof(item.description) === 'undefined') {
                    let name = obj.scientificName.split(' ')
                    item = await getImageAndDescription(name[0])
                    item.description = " ";
                    }
            
                    obj.description = item.description
                    obj.image = item.url   
                    
                   if(jsonData[i]["depth"] === 'unspecified')
                   {
                    jsonData[i]["depth"] = 0;
                   }
                   if(jsonData[i]["depthAccuracy"] === "unspecified")
                   {
                    jsonData[i]["depthAccuracy"] = 0;
                   }
                    createFish(jsonData[i]["scientificName"], Number(jsonData[i]["decimalLatitude"]), Number(jsonData[i]["decimalLongitude"]), jsonData[i]["locality"], jsonData[i]["depth"], jsonData[i]["depthAccuracy"], obj.description, obj.image, key)
                    

                }
            }
        }
        console.timeEnd("dbtrack");
    } catch (parseError) {
        console.timeEnd("dbtrack");
        console.error('Error parsing JSON:', parseError);
    }
});
function pointInsidePolygon(latitude, longitude, polygon) {
    const BoundaryPolygon = turf.polygon([polygon]);
    const point = turf.point([longitude, latitude]);
    const isInside = booleanPointInPolygon(point, BoundaryPolygon);
    
    return isInside;
}
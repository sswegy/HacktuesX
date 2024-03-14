import fs from 'fs';
import coordinates from './coordinates.js';

fs.readFile('./backend/data/extractedData.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    
    try {
        // Parse JSON data
        const jsonData = JSON.parse(data);
        console.log('Parsed JSON data:', jsonData);
        const arr = Array.from(jsonData);
        arr.forEach(element => {
          
            for(const key in coordinates)
            {
                if(pointInsidePolygon( element["decimalLatitude"],element["decimalLongitude"],coordinates[key]))
                {
                    console.log(element["scientificName"]," in ",key);
                }
            }
        });
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});

function pointInsidePolygon(x, y, poly) {
    
    
    
    let n = poly.length;
    let inside = false;
    let p1x = poly[0][0];
    let p1y = poly[0][1];
    for (let i = 1; i <= n; i++) {
        let p2x = poly[i % n][0];
        let p2y = poly[i % n][1];
        if (y > Math.min(p1y, p2y)) {
            if (y <= Math.max(p1y, p2y)) {
                if (x <= Math.max(p1x, p2x)) {
                    if (p1y != p2y) {
                        let xinters = (y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x;
                        if (p1x == p2x || x <= xinters) {
                            inside = !inside;
                        }
                    }
                }
            }
        }
        p1x = p2x;
        p1y = p2y;
    }
    return inside;
}

function retrieve_cords()
{

}
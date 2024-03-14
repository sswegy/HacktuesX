import fs from 'fs'
import getImageAndDescription from './infoFinder.js'


function populateDB() {
    fs.readFile('../../data/extractedData.json', 'utf8', async (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
            return
        }
    
        let jsonData = JSON.parse(data)
        for (let i = 0; i < jsonData.length; i++) {
            let obj = jsonData[i]
            let item = await getImageAndDescription(obj.scientificName)
        
            if (item.description === undefined) {
                let name = obj.scientificName.split(' ')
                item = await getImageAndDescription(name[0])
            }
        
            obj.description = item.description
            obj.image = item.url
        
            console.log(JSON.stringify(obj, null, 2))
        }
    })
}

populateDB()
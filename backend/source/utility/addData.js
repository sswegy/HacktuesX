import fs from 'fs'
import getImageAndDescription from './infoFinder.js'


function addData() {
    fs.readFile('../../data/extractedData.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
            return
        }
    
        let jsonData = JSON.parse(data)
        jsonData.forEach(obj => {
            getImageAndDescription(obj.scientificName).then(item => {obj.description = item.description})
        })
    
        let updatedJsonData = JSON.stringify(jsonData, null, 2)
        fs.writeFile('../../data/extractedData.json', updatedJsonData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err)
                return
            }
            console.log('New field added to data.json')
        })
    })
}

addData()
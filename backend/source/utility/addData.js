import fs from 'fs'
import searchImages from '../../../frontend/src/searchEngine.js'


function addData() {
    fs.readFile('D:/Programming/JavaScript/HacktuesX/backend/data/extractedData.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
            return
        }
    
        let jsonData = JSON.parse(data)
        jsonData.forEach(async obj => {
            const desc = await searchImages(obj.scientificName).description
            console.log(desc)
            obj.description = desc
        })
    
        let updatedJsonData = JSON.stringify(jsonData, null, 2)
        fs.writeFile('D:/Programming/JavaScript/HacktuesX/backend/data/extractedData.json', updatedJsonData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err)
                return
            }
            console.log('New field added to data.json')
        })
    })
}

addData()
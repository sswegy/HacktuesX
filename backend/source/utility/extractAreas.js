import fs  from 'fs'


function extractAreas(inputFile, outputFile) {
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading input file:', err)
            return
        }

        try {
            const jsonData = JSON.parse(data)
            const extractedData = {}

            jsonData.features.forEach(feature => {
                const name = feature.properties.name
                const coordinates = feature.geometry.coordinates[0]
                extractedData[name] = coordinates.reverse()
            })

            fs.writeFile(outputFile, JSON.stringify(extractedData, null, 4), 'utf8', (err) => {
                if (err) 
                    console.error('Error writing output file:', err)
            })
        } catch (parseError) {
            console.error('Error parsing input JSON:', parseError)
        }
    })
}

extractAreas('../../data/areas.json', '../../data/extractedAreas.json');
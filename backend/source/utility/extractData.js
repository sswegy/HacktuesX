import fs from 'fs'


function removeAfterComma(str) {
    const tokens = str.trim().split(/\(|,/)
    return tokens[0]
}

function extractData(csvFile, desiredColumns) {
    const file = fs.readFileSync(csvFile, 'utf-8').split('\n')
    let extractedData = []
    
    const headers = file[0].trim().split('\t')
    file.shift()

    file.forEach(line => {
        const values = line.trim().split('\t')
        let extractedRow = {}
        let mustBeExtracted = 'True'

        desiredColumns.forEach((column) => {
            extractedRow[column] = values[headers.indexOf(column)]
            
            if ((column === 'depth' || column === 'depthAccuracy') && extractedRow[column] === '')
                extractedRow[column] = 'unspecified'
            if (extractedRow[column] === '' || extractedRow[column] === undefined || extractedRow[column] === 'Chordata')
                mustBeExtracted = 'False'
            else if (column === 'scientificName')
                extractedRow[column] = removeAfterComma(extractedRow[column])
        })

        if (mustBeExtracted === 'True' && extractedData.indexOf(extractedRow) == -1)
            extractedData.push(extractedRow)
    })

    return extractedData
}

function writeArrayToFile(extractedData, path) {
    const jsonData = JSON.stringify(extractedData, null, 2)
    fs.writeFileSync(path, jsonData)
}

const desiredColumns = ['scientificName', 'decimalLatitude', 'decimalLongitude', 'locality', 'depth', 'depthAccuracy']
writeArrayToFile(extractData('../../data/data.csv', desiredColumns), '../../data/extractedData.json')
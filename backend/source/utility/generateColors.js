import fs from 'fs'

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return [r, g, b]
}

function generateRandomColors(file, numOfColors) {
    const colors = []

    for (let i = 0; i < numOfColors; i++)
        colors.push(generateRandomColor())
    
    const jsonData = JSON.stringify(colors);
    
    fs.writeFile(file, jsonData, (err) => {
        if (err) {
            console.error('Error writing JSON file:', err)
        } else {
            console.log('JSON file with colors has been saved.')
        }
    })
}

generateRandomColors('../../data/colors.json', 49)
import coordinates from "../data/coordinates.js"

const colors = [[157,41,192],[93,142,52],[61,97,128],[10,109,245],[111,180,181],[14,96,144],[21,14,91],[208,174,228],[106,249,187],[0,93,203],[21,148,250],[249,248,41],[207,213,140],[192,155,48],[120,171,227],[226,240,248],[187,241,236],[4,217,179],[136,28,191],[45,66,236],[26,175,223],[134,43,58],[100,82,19],[37,254,5],[104,169,110],[81,246,46],[205,96,248],[29,221,1],[38,98,246],[24,3,181],[228,200,143],[9,209,89],[223,14,64],[248,192,35],[29,182,147],[136,241,177],[46,249,6],[152,36,83],[102,3,220],[32,12,251],[139,122,58],[236,45,50],[66,202,104],[224,43,204],[111,135,118],[27,81,64],[26,181,224],[245,172,165],[214,151,89]]

const polygons = [
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [0.001, 0.001],
                    [0, 0.001],
                    [0, 0],
                    [0.001, 0],
                    [0.001, 0.001]
                ]
            ]
        },
        name: "world",
        color: [255, 255, 255]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["sergasso-sea"]]
        },
        name: "Sergasso Sea",
        color: colors[0]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-american-north-atlantic-coast"]]
        },
        name: "South America North Atlantic Coast",
        color: colors[1]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-pacific-south"]]
        },
        name: "North Pacific Ocean - South",
        color: colors[2]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["african-european-west-coast"]]
        },
        name: "Afro-European West Coast",
        color: colors[3]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-north-atlantic-ocean"]]
        },
        name: "North Atlantic Ocean - North",
        color: colors[4]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["middle-north-atlantic-ocean"]]
        },
        name: "North Atlantic Ocean - Middle",
        color: colors[5]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["midle-atlantic-ocean"]]
        },
        name: "Atlantic Ocean - Middle",
        color: colors[6]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-american-east-coast"]]
        },
        name: "South America East Coast",
        color: colors[7]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["african-west-coast"]]
        },
        name: "Africa West Coast",
        color: colors[8]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["antarctic-north-coast"]]
        },
        name: "Antarctica North Coast",
        color: colors[9]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["middle-south-atlantic-ocean"]]
        },
        name: "South Atlantic Ocean - Middle",
        color: colors[10]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["atlantic-to-indian-ocean"]]
        },
        name: "Atlantic to Indian Ocean",
        color: colors[11]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["african-east-coast"]]
        },
        name: "Africa East Coast",
        color: colors[12]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["arabian-sea"]]
        },
        name: "Arabian Sea",
        color: colors[13]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bay-of-bangal-and-andaman-sea"]]
        },
        name: "Bengal Bay and Andaman Sea",
        color: colors[14]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["indonesian-south-west-coast"]]
        },
        name: "Indonesia South West Coast",
        color:colors[15]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["indian-south-east-ocean"]]
        },
        name: "Indian Ocean - South East",
        color: colors[16]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["australian-south-west-coast"]]
        },
        name: "Australia South West Coast",
        color: colors[17]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["middle-indian-ocean"]]
        },
        name: "Indian Ocean Middle",
        color: colors[18]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["mexico-gulf"]]
        },
        name: "Gulf of Mexico",
        color: colors[19]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["caribbean-sea"]]
        },
        name: "Carribean Sea",
        color: colors[20]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-america-west-coast"]]
        },
        name: "South America West Coast",
        color: colors[21]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["antarctic-atlantic-coast"]]
        },
        name: "Antarctica North Coast",
        color: colors[22]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-pacific-ocean"]]
        },
        name: "South Pacific Ocean",
        color: colors[23]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["tasman-sea"]]
        },
        name: "Tasman Sea",
        color: colors[24]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["coral-sea"]]
        },
        name: "Coral Sea",
        color: colors[25]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["solomon-sea"]]
        },
        name: "Solomon Sea",
        color: colors[26]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bering-sea"]]
        },
        name: "Bering Sea",
        color: colors[27]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["okhotsk-sea"]]
        },
        name: "Okhotsk Sea",
        color: colors[28]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["japan-east-sea"]]
        },
        name: "Japan Sea - East",
        color: colors[29]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bismarck-sea"]]
        },
        name: "Bismarck Sea",
        color: colors[30]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-pacific-east"]]
        },
        name: "North Pacific Ocean - East",
        color: colors[31]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bohai-sea"]]
        },
        name: "Bohai Sea",
        color: colors[32]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["korea-bay"]]
        },
        name: "Korea Bay",
        color: colors[33]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["carpentaria-gulf"]]
        },
        name: "Carpentaria Gulf",
        color: colors[34]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["philippine-sea"]]
        },
        name: "Philippine Sea",
        color: colors[35]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["yellow-sea"]]
        },
        name: "Yellow Sea",
        color: colors[36]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-chine-sea"]]
        },
        name: "China Sea - South",
        color: colors[37]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["sufu-sea"]]
        },
        name: "Sufu Sea",
        color: colors[38]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["java-sea"]]
        },
        name: "Java Sea",
        color: colors[39]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["banda-sea"]]
        },
        name: "Banda Sea",
        color: colors[40]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["mediterranean-sea"]]
        },
        name: "Mediterranean Sea",
        color: colors[41]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["arafura-timor-sea"]]
        },
        name: "Arafura Sea",
        color: colors[42]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["black-sea"]]
        },
        name: "Black Sea",
        color: colors[43]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["caspian-sea"]]
        },
        name: "Caspian Sea",
        color: colors[44]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["persian-gulf"]]
        },
        name: "Persian Gulf",
        color: colors[45]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["red-sea"]]
        },
        name: "Red Sea",
        color: colors[46]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["antarctic-pacific-coast"]]
        },
        name: "Antarctica North Indian Cost",
        color: colors[47]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-pacific-north"]]
        },
        name: "North Paciic Ocean - North",
        color: colors[48]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-pacific-middle"]]
        },
        name: "North Pacific - Middle",
        color: colors[0]
    },
    
];

export default polygons;
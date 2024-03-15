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
        name: "sergasso-sea",
        color: colors[0]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-american-north-atlantic-coast"]]
        },
        name: "south-american-north-atlantic-coast",
        color: colors[1]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-pacific-south"]]
        },
        name: "north-pacific-south",
        color: colors[2]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["african-european-west-coast"]]
        },
        name: "african-european-west-coast",
        color: colors[3]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-north-atlantic-ocean"]]
        },
        name: "north-north-atlantic-ocean",
        color: colors[4]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["middle-north-atlantic-ocean"]]
        },
        name: "middle-north-atlantic-ocean",
        color: colors[5]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["midle-atlantic-ocean"]]
        },
        name: "midle-atlantic-ocean",
        color: colors[6]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-american-east-coast"]]
        },
        name: "south-american-east-coast",
        color: colors[7]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["african-west-coast"]]
        },
        name: "african-west-coast",
        color: colors[8]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["antarctic-north-coast"]]
        },
        name: "antarctic-north-coast",
        color: colors[9]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["middle-south-atlantic-ocean"]]
        },
        name: "middle-south-atlantic-ocean",
        color: colors[10]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["atlantic-to-indian-ocean"]]
        },
        name: "atlantic-to-indian-ocean",
        color: colors[11]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["african-east-coast"]]
        },
        name: "african-east-coast",
        color: colors[12]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["arabian-sea"]]
        },
        name: "arabian-sea",
        color: colors[13]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bay-of-bangal-and-andaman-sea"]]
        },
        name: "bay-of-bangal-and-andaman-sea",
        color: colors[14]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["indonesian-south-west-coast"]]
        },
        name: "indonesian-south-west-coast",
        color:colors[15]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["indian-south-east-ocean"]]
        },
        name: "indian-south-east-ocean",
        color: colors[16]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["australian-south-west-coast"]]
        },
        name: "australian-south-west-coast",
        color: colors[17]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["middle-indian-ocean"]]
        },
        name: "middle-indian-ocean",
        color: colors[18]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["mexico-gulf"]]
        },
        name: "mexico-gulf",
        color: colors[19]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["caribbean-sea"]]
        },
        name: "caribbean-sea",
        color: colors[20]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-america-west-coast"]]
        },
        name: "south-america-west-coast",
        color: colors[21]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["antarctic-atlantic-coast"]]
        },
        name: "antartica-north-coast",
        color: colors[22]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-pacific-ocean"]]
        },
        name: "south-pacific-ocean",
        color: colors[23]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["tasman-sea"]]
        },
        name: "tasman-sea",
        color: colors[24]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["coral-sea"]]
        },
        name: "coral-sea",
        color: colors[25]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["solomon-sea"]]
        },
        name: "solomon-sea",
        color: colors[26]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bering-sea"]]
        },
        name: "bering-sea",
        color: colors[27]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["okhotsk-sea"]]
        },
        name: "okhotsk-sea",
        color: colors[28]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["japan-east-sea"]]
        },
        name: "japan-east-sea",
        color: colors[29]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bismarck-sea"]]
        },
        name: "bismarck-sea",
        color: colors[30]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-pacific-east"]]
        },
        name: "north-pacific-east",
        color: colors[31]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bohai-sea"]]
        },
        name: "bohai-sea",
        color: colors[32]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["korea-bay"]]
        },
        name: "korea-bay",
        color: colors[33]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["carpentaria-gulf"]]
        },
        name: "carpentaria-gulf",
        color: colors[34]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["philippine-sea"]]
        },
        name: "philippine-sea",
        color: colors[35]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["yellow-sea"]]
        },
        name: "yellow-sea",
        color: colors[36]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-chine-sea"]]
        },
        name: "south-chine-sea",
        color: colors[37]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["sufu-sea"]]
        },
        name: "sufu-sea",
        color: colors[38]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["java-sea"]]
        },
        name: "java-sea",
        color: colors[39]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["banda-sea"]]
        },
        name: "banda-sea",
        color: colors[40]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["mediterranean-sea"]]
        },
        name: "mediterranean-sea",
        color: colors[41]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["arafura-timor-sea"]]
        },
        name: "arafura-timor-sea",
        color: colors[42]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["black-sea"]]
        },
        name: "black-sea",
        color: colors[43]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["caspian-sea"]]
        },
        name: "caspian-sea",
        color: colors[44]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["persian-gulf"]]
        },
        name: "persian-gulf",
        color: colors[45]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["red-sea"]]
        },
        name: "red-sea",
        color: colors[46]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["antarctic-pacific-coast"]]
        },
        name: "antarctic-north-indian-coast",
        color: colors[47]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-pacific-north"]]
        },
        name: "north-pacific-north",
        color: colors[48]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-pacific-middle"]]
        },
        name: "north-pacific-middle",
        color: colors[0]
    },
    
];

export default polygons;
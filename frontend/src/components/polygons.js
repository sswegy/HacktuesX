import coordinates from "../data/coordinates.js"

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
        color: [106, 76, 147]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-american-north-atlantic-coast"]]
        },
        name: "south-american-north-atlantic-coast",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["african-european-west-coast"]]
        },
        name: "african-european-west-coast",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-north-atlantic-ocean"]]
        },
        name: "north-north-atlantic-ocean",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["middle-north-atlantic-ocean"]]
        },
        name: "middle-north-atlantic-ocean",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["midle-atlantic-ocean"]]
        },
        name: "midle-atlantic-ocean",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-american-east-coast"]]
        },
        name: "south-american-east-coast",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["african-west-coast"]]
        },
        name: "african-west-coast",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["antarctic-north-coast"]]
        },
        name: "antarctic-north-coast",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["middle-south-atlantic-ocean"]]
        },
        name: "middle-south-atlantic-ocean",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["atlantic-to-indian-ocean"]]
        },
        name: "atlantic-to-indian-ocean",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["african-east-coast"]]
        },
        name: "african-east-coast",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["arabian-sea"]]
        },
        name: "arabian-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bay-of-bangal-and-andaman-sea"]]
        },
        name: "bay-of-bangal-and-andaman-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["indonesian-south-west-coast"]]
        },
        name: "indonesian-south-west-coast",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["indian-south-east-ocean"]]
        },
        name: "indian-south-east-ocean",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["australian-south-west-coast"]]
        },
        name: "australian-south-west-coast",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["middle-indian-ocean"]]
        },
        name: "middle-indian-ocean",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["mexico-gulf"]]
        },
        name: "mexico-gulf",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["caribbean-sea"]]
        },
        name: "caribbean-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-america-west-coast"]]
        },
        name: "south-america-west-coast",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["antartica-north-coast"]]
        },
        name: "antartica-north-coast",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-pacific-ocean"]]
        },
        name: "south-pacific-ocean",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["tasman-sea"]]
        },
        name: "tasman-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["coral-sea"]]
        },
        name: "coral-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["solomon-sea"]]
        },
        name: "solomon-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bering-sea"]]
        },
        name: "bering-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["okhotsk-sea"]]
        },
        name: "okhotsk-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["japan-east-sea"]]
        },
        name: "japan-east-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bismarck-sea"]]
        },
        name: "bismarck-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-pacific-east"]]
        },
        name: "north-pacific-east",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["bohai-sea"]]
        },
        name: "bohai-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["korea-bay"]]
        },
        name: "korea-bay",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["carpentaria-gulf"]]
        },
        name: "carpentaria-gulf",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["philippine-sea"]]
        },
        name: "philippine-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["yellow-sea"]]
        },
        name: "yellow-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["south-chine-sea"]]
        },
        name: "south-chine-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["sufu-sea"]]
        },
        name: "sufu-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["java-sea"]]
        },
        name: "java-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["banda-sea"]]
        },
        name: "banda-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["mediterranean-sea"]]
        },
        name: "mediterranean-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["arafura-timor-sea"]]
        },
        name: "arafura-timor-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["black-sea"]]
        },
        name: "black-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["caspian-sea"]]
        },
        name: "caspian-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["persian-gulf"]]
        },
        name: "persian-gulf",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["red-sea"]]
        },
        name: "red-sea",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["antarctic-north-indian-coast"]]
        },
        name: "antarctic-north-indian-coast",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-pacific-north"]]
        },
        name: "north-pacific-north",
        color: [130, 56, 187]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates["north-pacific-south"]]
        },
        name: "north-pacific-south",
        color: [130, 56, 187]
    },
];

export default polygons;

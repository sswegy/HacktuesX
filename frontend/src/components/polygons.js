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
            coordinates: [coordinates['north-pacific']]
        },
        name: "north-pacific",
        color: [138, 201, 38]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates['south-atlantic']]
        },
        name: "south-atlantic",
        color: [255, 202, 58]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates['south-pacific']]
        },
        name: "south-pacific",
        color: [25, 130, 196]
    },
    {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [coordinates.indian]
        },
        name: "indian",
        color: [106, 76, 147]
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
            coordinates: [coordinates["north-north-atlantic-ocean"]]
        },
        name: "north-north-atlantic-ocean",
        color: [130, 56, 187]
    },
];

export default polygons;

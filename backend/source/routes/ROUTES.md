# Fish API Documentation

## Overview

The Fish API provides endpoints to interact with fish data, including retrieving fish information, sorting fish data, and managing fish records.

## Endpoints

### 1. Get All Fishes

- **URL:** `/fishes`
- **Method:** `GET`
- **Description:** Retrieves all fish records.
- **Response:** An array of fish objects.

### 2. Get Fish by ID

- **URL:** `/fishes/id/:id`
- **Method:** `GET`
- **Description:** Retrieves a specific fish record by its ID.
- **Parameters:**
  - `id`: The ID of the fish.
- **Response:** The fish object matching the provided ID.

### 3. Get Common Fish Order

- **URL:** `/fishes/common`
- **Method:** `GET`
- **Description:** Retrieves the common order of fish based on a specified area and type.
- **Query Parameters:**
  - `area`: The area to filter by.
  - `type`: The type of fish to filter by.
- **Response:** An array of fish objects in the common order.

### 4. Get Alphabetical Fish Order

- **URL:** `/fishes/alphabetical`
- **Method:** `GET`
- **Description:** Retrieves the alphabetical order of fish based on a specified area and type.
- **Query Parameters:**
  - `area`: The area to filter by.
  - `type`: The type of fish to filter by.
- **Response:** An array of fish objects in alphabetical order.

### 5. Get Fish by Depth Range

- **URL:** `/fishes/depth`
- **Method:** `GET`
- **Description:** Retrieves fish within a specified depth range based on a specified area and type.
- **Query Parameters:**
  - `area`: The area to filter by.
  - `fromDepth`: The minimum depth.
  - `toDepth`: The maximum depth.
  - `type`: The type of fish to filter by.
- **Response:** An array of fish objects within the specified depth range.

### 6. Get Fish by Depth

- **URL:** `/fishes/byDepth`
- **Method:** `GET`
- **Description:** Retrieves fish sorted by depth based on a specified area and type.
- **Query Parameters:**
  - `area`: The area to filter by.
  - `type`: The type of fish to filter by.
- **Response:** An array of fish objects sorted by depth.

### 7. Create Fish

- **URL:** `/fishes`
- **Method:** `POST`
- **Description:** Creates a new fish record.
- **Request Body:**
  - `scientificName`: The scientific name of the fish.
  - `decimalLatitude`: The latitude coordinate.
  - `decimalLongitude`: The longitude coordinate.
  - `locality`: The locality of the fish.
  - `depth`: The depth at which the fish is found.
  - `depthAccuracy`: The accuracy of the depth measurement.
  - `description`: Additional description of the fish.
  - `image`: URL of the fish image.
  - `area`: The area where the fish is found.
- **Response:** The created fish object.

### 8. Update Fish by ID

- **URL:** `/fishes/id/:id`
- **Method:** `PUT`
- **Description:** Updates an existing fish record by its ID.
- **Parameters:**
  - `id`: The ID of the fish.
- **Request Body:**
  - `scientificName`: The updated scientific name of the fish.
  - `decimalLatitude`: The updated latitude coordinate.
  - `decimalLongitude`: The updated longitude coordinate.
  - `locality`: The updated locality of the fish.
  - `depth`: The updated depth at which the fish is found.
  - `depthAccuracy`: The updated accuracy of the depth measurement.
- **Response:** The updated fish object.


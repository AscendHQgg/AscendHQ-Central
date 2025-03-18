# API Documentation

This file should contain the API documentation for the Dealership Dashboard project. Ensure that the documentation matches the frontend schema and provides detailed information about the available endpoints, request/response formats, and any required authentication.

Please add the relevant API documentation here.
## Sample Endpoint: Get Vehicle Details

### Endpoint
`GET /api/vehicles/{vehicleId}`

### Description
Retrieve detailed information about a specific vehicle.

### Request Parameters
- `vehicleId` (path parameter): The unique identifier of the vehicle.

### Response
- **Status Code**: 200 OK
- **Content-Type**: application/json
- **Body**:
  ```json
  {
      "vehicleId": "12345",
      "make": "Toyota",
      "model": "Camry",
      "year": 2022,
      "price": 25000,
      "description": "A reliable sedan with excellent fuel efficiency."
  }
  ```

### Error Responses
- **Status Code**: 404 Not Found
  - **Description**: The specified vehicle was not found.
- **Status Code**: 500 Internal Server Error
  - **Description**: An error occurred while processing the request.

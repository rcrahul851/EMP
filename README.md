Event Management API

This project implements a RESTful API for managing events using Node.js, Express, and MongoDB.

Monorepo Contents
`/server`: Contains the main server application files.
`/app`: Express application setup and middleware configurations.
`/routes/event.ts`: API routes for event CRUD operations.
`/controller/event.controller.ts`: Controller functions handling HTTP requests.
`/models/event.ts`: Mongoose schema and model definitions for events.
`/config/config.ts`: Database connection setup using Mongoose.

Getting Started
Tools and Technologies
Ensure you have the following installed on your machine:

Node.js (v12 or higher)
MongoDB (running locally or accessible via URL)
npm or yarn for package management

Setting Up the Project

1. Clone the repository:
   git clone <https://github.com/rcrahul851/EMP.git>
   cd event-management-api

2. Install dependencies:
   npm install

3. Set environment variables:
   Create a .env file in the root directory with the following content:
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/event-management

Adjust PORT as needed and replace mongodb://localhost:27017/event-management with your MongoDB connection URI.

4. Start the server:
   npm start

This will start the Express server on the specified port (default is 4000).

- [Postman](https://www.postman.com/downloads) for API testing
  Postman collection is = `https://api.postman.com/collections/29625521-ff505b9b-a0c3-4f8d-9327-940db1ad782d?access_key=PMAT-01J1A966JBY07CXNBDKCVBVPG2`

Using the API
Example API Endpoints:

1. Create a new event:
   POST http://localhost:4000/events
   Content-Type: application/json

{
"eventName": "Sample Event",
"eventDate": "2024-07-01T12:00:00Z",
"organizer": "John Doe",
"email": "john.doe@example.com",
"phone": "+1234567890",
"location": {
"street": "123 Sample St",
"city": "Sample City",
"state": "Sample State",
"zip": "12345"
}
}

2. Retrieve all events or optional filter:
   GET http://localhost:4000/events

3. Update an event:
   PUT http://localhost:4000/events/:id
   Content-Type: application/json
   {
   "eventName": "Event rahul",
   "eventDate": "2024-06-026T12:00:00.000Z",
   "organizer": "Rahul Name",
   "email": "organizearahul@example.com",
   "phone": "0987654321",
   "location": {
   "street": "12 hight St",
   "city": "City",
   "state": "State",
   "zip": "12345"
   }
   }

4. Delete an event:
   DELETE http://localhost:4000/events/:id

5. Retrieve an event by ID:
   GET http://localhost:4000/events/:id

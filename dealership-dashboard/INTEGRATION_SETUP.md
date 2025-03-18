# Integration Setup

This document provides instructions for setting up the integration for the Dealership Dashboard project.

## Prerequisites

- Node.js and npm installed on your machine
- A GitHub account with access to the AscendHQ-Central repository
- Any required API keys or credentials

## Steps

1. **Clone the Repository**
   ```
   git clone https://github.com/AscendHQgg/AscendHQ-Central.git
   ```

2. **Install Dependencies**
   Navigate to the `dealership-dashboard` directory and install the dependencies:
   ```
   cd AscendHQ-Central/dealership-dashboard
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root of the `dealership-dashboard` directory and add any required environment variables.

4. **Run the Application**
   Start the development server:
   ```
   npm run dev
   ```

5. **Build for Production**
   To build the application for production, run:
   ```
   npm run build
   ```

6. **Deploy**
   Deploy the application to your preferred hosting service.

## API Documentation

Ensure that the API documentation is accessible and matches the frontend schema. Refer to the `docs` directory for API documentation.

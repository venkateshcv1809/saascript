# Frontend Next.js Application

This is a foundational Next.js application set up to serve as a server-side rendered frontend that consumes backend microservices.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:

   git clone <repository-url>

2. Navigate to the `frontend` directory:

   cd frontend

3. Install the dependencies:

   npm install

### Running the Application

To run the application in development mode, use the following command:

npm run dev

This will start the Next.js development server, and you can view the application in your browser at `http://localhost:3000`.

### Building for Production

To build the application for production, run:

npm run build

After building, you can start the production server with:

npm start

### Folder Structure

- **pages/**: Contains the application's pages and API routes.
- **public/**: Static assets such as images and icons.
- **styles/**: Global and component-specific styles.
- **next.config.js**: Configuration file for Next.js.
- **package.json**: Project metadata and dependencies.
- **tsconfig.json**: TypeScript configuration.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
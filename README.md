# TeachAi

This project is a work in progress OCR (Optical Character Recognition) application that extracts text from materials using image recognition. The extracted text is then sent to the OpenAI API for further processing and interaction.

## Features

- Upload an image containing text for OCR processing
- Extract text from the uploaded image using image recognition
- Send the extracted text to the OpenAI API for interaction
- Display the generated response from the OpenAI API

## Technologies Used

- React.js
- Node.js
- Express.js
- OpenAI API

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine
- OpenAI API credentials

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/osaigb/teachai.git
   
### Navigate to the project directory:

cd teachai
### Install the dependencies for the React app:
cd client
npm install

### Return to the project root directory:
cd ..
### Install the dependencies for the Node.js server:
npm install

### Configuration
1. Create a .env file in the project root directory.
1. Add your OpenAI API credentials to the .env file:
OPENAI_API_KEY=your-openai-api-key

### Usage
1. Start the development server:
npm run dev
1. Open your browser and visit http://localhost:3000 to access the OCR app.

### Deployment
To deploy the OCR app to a production environment, follow these steps:

1. Build the React app:
cd client
npm run build
1. Return to the project root directory:
cd ..
1. Start the Node.js server:

npm start
1. Your OCR app is now running in a production environment.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

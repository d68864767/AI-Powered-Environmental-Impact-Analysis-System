// Import the Google Cloud AI Platform client library
const {PredictionServiceClient} = require('@google-cloud/ai-platform');

// Import the configuration from config.ai.js
const aiConfig = require('./config.ai.js');

// Import the data ingestion module
const dataIngestion = require('./dataIngestion.js');

// Creates a client; cache this for further use
const predictionClient = new PredictionServiceClient();

// Define your project ID, model ID and version ID
const projectId = aiConfig.projectId;
const modelId = aiConfig.modelId;
const versionId = aiConfig.versionId;

// Define the full path of your model
const modelPath = predictionClient.modelPath(projectId, 'us-central1', modelId);

// Define the full path of your model version
const versionPath = predictionClient.modelVersionPath(projectId, 'us-central1', modelId, versionId);

// Function to analyze pollution data
async function analyzePollutionData() {
  // Listen for new messages from the PubSub subscription
  const messages = await dataIngestion.listenForMessages();

  // Process each message
  for (const message of messages) {
    // Extract the pollution data from the message
    const pollutionData = message.data;

    // Prepare the request for the AI Platform
    const request = {
      name: versionPath,
      payload: {
        image: {
          imageBytes: pollutionData
        }
      }
    };

    // Make a prediction using the AI Platform
    const [response] = await predictionClient.predict(request);

    // Log the prediction results
    console.log(`Prediction results for message ${message.id}: ${response}`);
  }
}

// Export the function for further use
module.exports = {
  analyzePollutionData
};

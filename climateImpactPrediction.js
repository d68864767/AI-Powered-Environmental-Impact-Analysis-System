// Import the Google Cloud AI Platform client library
const {PredictionServiceClient} = require('@google-cloud/ai-platform');

// Import the data ingestion module
const dataIngestion = require('./dataIngestion.js');

// Import the AI configuration from config.ai.js
const aiConfig = require('./config.ai.js');

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

// Function to predict the climate impact
async function predictClimateImpact() {
  // Listen for new messages from the PubSub topic
  const messages = await dataIngestion.listenForMessages();

  // Process each message
  for (const message of messages) {
    // Extract the data from the message
    const inputData = message.data;

    // Predict the climate impact using the AI model
    const request = {
      name: versionPath,
      payload: {
        image: {
          imageBytes: inputData
        }
      }
    };

    const [response] = await predictionClient.predict(request);
    console.log(`Predicted climate impact: ${response}`);
  }
}

// Export the function for further use
module.exports = {
  predictClimateImpact
};

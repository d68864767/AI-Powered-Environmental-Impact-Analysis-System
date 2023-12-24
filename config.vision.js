// Import the Google Cloud Vision library
const vision = require('@google-cloud/vision');

// Create a client for Vision API
const visionClient = new vision.ImageAnnotatorClient({
  // Path to your service account key file
  keyFilename: 'path/to/your/service-account-key.json'
});

// Configure the Vision API
const visionConfig = {
  // Specify the types of detection
  features: [
    { type: 'LANDMARK_DETECTION', maxResults: 5 },
    { type: 'LABEL_DETECTION', maxResults: 5 },
    { type: 'IMAGE_PROPERTIES', maxResults: 5 },
    { type: 'CROP_HINTS', maxResults: 5 },
    { type: 'WEB_DETECTION', maxResults: 5 },
  ],
  // Specify the image context for the Vision API
  imageContext: {
    latLongRect: {
      minLatLng: { latitude: 0, longitude: 0 },
      maxLatLng: { latitude: 0, longitude: 0 },
    },
    cropHintsParams: {
      aspectRatios: [1.0],
    },
  },
};

module.exports = {
  visionClient,
  visionConfig,
};

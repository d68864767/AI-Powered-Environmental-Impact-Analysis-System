// Import the Google Cloud PubSub client library
const {PubSub} = require('@google-cloud/pubsub');

// Import the configuration from config.pubsub.js
const pubsubConfig = require('./config.pubsub.js');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

// Define your project ID and the name of the topic that you want to subscribe to
const projectId = pubsubConfig.projectId;
const topicName = pubsubConfig.topicName;
const subscriptionName = pubsubConfig.subscriptionName;

// Function to listen for messages
async function listenForMessages() {
  const subscription = pubSubClient.subscription(subscriptionName);

  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = message => {
    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);
    messageCount += 1;

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Listen for new messages until timeout is hit
  subscription.on('message', messageHandler);

  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}

// Export the function for further use
module.exports = {
  listenForMessages
};

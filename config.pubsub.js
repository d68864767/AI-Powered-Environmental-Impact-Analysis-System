// Import the Google Cloud PubSub client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

// Define your project ID and the name of the topic that you want to subscribe to
const projectId = 'your-project-id';
const topicName = 'your-topic-name';
const subscriptionName = 'your-subscription-name';

// Creates a new topic
async function createTopic() {
  const topic = await pubSubClient.topic(topicName);
  await topic.create();
  console.log(`Topic ${topicName} created.`);
}

// Creates a subscription on that topic
async function createSubscription() {
  const topic = await pubSubClient.topic(topicName);
  const subscription = await topic.subscription(subscriptionName);
  await subscription.create();
  console.log(`Subscription ${subscriptionName} created.`);
}

// Export the functions for further use
module.exports = {
  createTopic,
  createSubscription,
  pubSubClient,
  topicName,
  subscriptionName
};

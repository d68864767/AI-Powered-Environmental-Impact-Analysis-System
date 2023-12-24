# Deployment Guide

This guide will walk you through the steps to deploy the "AI-Powered Environmental Impact Analysis System" on Google Cloud Platform (GCP).

## Prerequisites

- Google Cloud Platform account
- Node.js installed on your local machine
- Google Cloud SDK installed on your local machine

## Steps

1. **Set up your Google Cloud Project**

   - Log in to your Google Cloud Console.
   - Create a new project or select an existing one.
   - Enable billing for your project.
   - Enable the necessary APIs for your project (Pub/Sub, Vision API, AI Platform, App Engine, Maps API).

2. **Set up Authentication**

   - In the GCP Console, go to the Create service account key page.
   - From the Service account list, select New service account.
   - In the Service account name field, enter a name.
   - From the Role list, select Project > Owner.
   - Click Create. A JSON file that contains your key downloads to your local environment.
   - Set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` to the path of the JSON file.

3. **Clone the Project Repository**

   - Clone the project repository to your local machine using `git clone`.

4. **Install Dependencies**

   - Navigate to the project directory and run `npm install` to install the necessary Node.js dependencies.

5. **Configure the Project**

   - Update the configuration files (`config.pubsub.js`, `config.vision.js`, `config.ai.js`, `config.appengine.js`, `config.maps.js`) with your project details, service account key file path, and other necessary details.

6. **Deploy the App Engine Application**

   - Navigate to the project directory and run `gcloud app deploy` to deploy the application to Google App Engine.

7. **Activate the Pub/Sub Topic and Subscription**

   - Run `node config.pubsub.js` to create the Pub/Sub topic and subscription.

8. **Start the Data Ingestion Service**

   - Run `node dataIngestion.js` to start listening for messages on the Pub/Sub topic.

9. **Access the Application**

   - Open a web browser and navigate to your deployed App Engine URL (format: `https://PROJECT_ID.REGION_ID.r.appspot.com`).

## Testing

- To test the system, you can publish messages to the Pub/Sub topic using the Google Cloud Console or the `gcloud` command-line tool. The system should process the data and update the dashboard accordingly.

## Troubleshooting

- If you encounter any issues during deployment, check the logs in the Google Cloud Console or use the `gcloud app logs tail` command to view the App Engine logs in real-time.


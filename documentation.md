# AI-Powered Environmental Impact Analysis System

This document provides a detailed overview of the AI-Powered Environmental Impact Analysis System. The system leverages Google Cloud's AI capabilities to analyze and predict environmental impacts in various scenarios. It processes diverse data sources to offer insights into environmental changes, risks, and potential mitigation strategies.

## System Architecture

The system is composed of several modules, each responsible for a specific task:

1. **Data Collection and Integration**: This module is responsible for ingesting environmental data from multiple sources like satellite imagery, sensor data from IoT devices, weather stations, and public environmental databases. The data ingestion is handled by Google Cloud Pub/Sub.

2. **Environmental Change Detection**: This module uses Google Cloud Vision API to analyze satellite and aerial imagery for detecting changes in landscapes, forest cover, water bodies, etc. It also implements time-series analysis to track and predict environmental changes over time.

3. **Pollution and Risk Analysis**: This module analyzes air and water quality data using Google Cloud AI Platform to identify pollution patterns and potential health risks. It employs predictive models to forecast future pollution levels and environmental hazards.

4. **Climate Impact Predictions**: This module utilizes machine learning models on Google Cloud Machine Learning Engine to analyze climate data and predict potential impacts like droughts, floods, or severe weather events.

5. **Interactive Dashboard for Data Visualization**: This module develops a web dashboard using Google App Engine to display environmental data, analysis results, and predictions. It integrates Google Maps API for geospatial representation of environmental data.

## Setup Guide

1. **Google Cloud Pub/Sub Setup**: Configure the `config.pubsub.js` file with your Google Cloud project ID, topic name, and subscription name. Run the `createTopic` and `createSubscription` functions to set up the Pub/Sub client.

2. **Data Ingestion Setup**: Use the `listenForMessages` function in `dataIngestion.js` to start listening for messages from the Pub/Sub topic.

3. **Google Cloud Vision API Setup**: Configure the `config.vision.js` file with the path to your service account key file and the desired types of detection. Use the `detectChanges` function in `changeDetection.js` to start analyzing images.

4. **Google Cloud AI Platform Setup**: Configure the `config.ai.js` file with your Google Cloud project ID, model ID, and version ID. Use the functions in `pollutionAnalysis.js` and `climateImpactPrediction.js` to start analyzing environmental data.

5. **Google App Engine and Google Maps API Setup**: Configure the `config.appengine.js` and `config.maps.js` files with your Google Cloud project ID and other necessary information. Use the `dashboard.js` file to start the web server and display the dashboard.

## Usage Instructions

1. **Data Collection and Integration**: Run the `dataIngestion.js` script to start collecting data from the configured sources.

2. **Environmental Change Detection**: Run the `changeDetection.js` script to start analyzing the collected data for environmental changes.

3. **Pollution and Risk Analysis**: Run the `pollutionAnalysis.js` script to start analyzing the collected data for pollution and risks.

4. **Climate Impact Predictions**: Run the `climateImpactPrediction.js` script to start predicting potential climate impacts.

5. **Interactive Dashboard for Data Visualization**: Run the `dashboard.js` script to start the web server and open the dashboard in your web browser.

## Deployment Guide

Please refer to the `deploymentGuide.md` file for instructions on how to deploy the system on Google Cloud Platform.

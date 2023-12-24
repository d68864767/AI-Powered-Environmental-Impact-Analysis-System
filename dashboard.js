```javascript
// Import the required libraries and configurations
const express = require('express');
const { Datastore } = require('@google-cloud/datastore');
const { Maps } = require('@google/maps');
const mapsConfig = require('./config.maps.js');
const appengineConfig = require('./config.appengine.js');

// Create an Express application
const app = express();

// Create a Google Cloud Datastore client
const datastore = new Datastore();

// Create a Google Maps client
const mapsClient = new Maps.createClient({
  key: mapsConfig.apiKey,
  Promise: Promise
});

// Define the routes for the dashboard
app.get('/', async (req, res) => {
  // Query the Datastore for all environmental data
  const query = datastore.createQuery('EnvironmentalData');
  const [entities] = await datastore.runQuery(query);

  // Convert the entities to a format suitable for display
  const data = entities.map(entity => {
    return {
      id: entity[datastore.KEY].id,
      ...entity
    };
  });

  // Render the dashboard with the data
  res.render('dashboard', { data });
});

app.get('/map', async (req, res) => {
  // Query the Datastore for all geospatial data
  const query = datastore.createQuery('GeospatialData');
  const [entities] = await datastore.runQuery(query);

  // Convert the entities to a format suitable for display
  const data = entities.map(entity => {
    return {
      id: entity[datastore.KEY].id,
      ...entity
    };
  });

  // Render the map with the data
  res.render('map', { data });
});

// Start the server
const PORT = process.env.PORT || appengineConfig.port;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
```

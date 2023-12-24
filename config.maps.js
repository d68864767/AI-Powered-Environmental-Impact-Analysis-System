// Importing the Google Maps API
const { Maps } = require('@google/maps');

// Configuring the Google Maps API
const maps = Maps.createClient({
  key: 'YOUR_GOOGLE_MAPS_API_KEY',
  Promise: Promise
});

// Exporting the configured Google Maps API
module.exports = maps;

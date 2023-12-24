```javascript
// Import the Google Cloud client library
const { AppEngine } = require('@google-cloud/appengine-admin');

// Your Google Cloud Platform project ID
const projectId = 'YOUR_PROJECT_ID';

// Creates a client
const appengine = new AppEngine();

// The location of your app
const location = 'us-central';

// The ID of your App Engine app
const appId = 'YOUR_APP_ID';

// The service to get
const serviceId = 'default';

// The version to get
const versionId = 'YOUR_VERSION_ID';

const request = {
  name: appengine.appPath(projectId, location, appId, serviceId, versionId),
};

// Gets the settings of an App Engine app
appengine.apps.services.versions.getConfig(request)
  .then(response => {
    console.log(`App Engine Config: ${JSON.stringify(response.data, null, 2)}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
```

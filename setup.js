const  fs = require('fs');

const credentials = {
  apiKiey: 'YOUR_ATRIUM_API_KEY',
  clientId: 'YOUR_ATRIUM_CLIENT_ID'
}

fs.writeFile('credentials.json', JSON.stringify(credentials));

#### Usage ####
- Clone repo
- cd into `mx-atrium-express`
- run `npm run setup`
- open `credentials.json` and replace `apiKey` and `clientId` with correct values
- run `npm run start`

This should start a server on port `3001` that will proxy to the Atrium API.

This relies on the `mx-atrium` wrapper, which has not been published as of yet.
To install that:
- clone https://github.com/mxenabled/mx-atrium-node
- `npm install ../path/to/atrium`

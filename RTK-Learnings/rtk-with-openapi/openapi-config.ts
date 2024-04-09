
const config = {
  schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',
  apiFile: './src/store/api/emptyApi.js',
  apiImport: 'emptySplitApi',
  outputFile: './src/store/api/petApi.js',
  exportName: 'petApi',
  hooks: true,
}

module.exports = config;


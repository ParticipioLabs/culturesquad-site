const defaultConfig = {
  cacheMiddlewareBaseEndpoint: 'http://localhost:3001',
  googleMapsAPiKey: 'AIzaSyCJggRm-4pW6IItY8QNXQRkFu2_xKuByC8',
  edgerydersUrl: 'https://edgeryders.eu',
  websiteName: 'Culture Squad',
  mapNodes: [
    {name: 'Berlin', position: { lng: 13.404954, lat: 52.520008 }},
    {name: 'Brussels', position: { lng: 4.34878, lat: 50.85045 }},
    {name: 'Athens', position: { lng: 23.727539, lat: 37.983810 }},
    {name: 'Bedford', position: { lng: -0.460739, lat: 52.136436 }},
    {name: 'Timisoara', position: { lng: 21.226788, lat: 45.760696 }},
    {name: 'Rijeka', position: { lng: 14.457664, lat: 45.328979 }},
    {name: 'Matera', position: { lng: 16.59723, lat: 40.66983 }}
  ]
};

const config = {
  dev: {
    ...defaultConfig
  },
  staging: {
    ...defaultConfig,
    cacheMiddlewareBaseEndpoint: 'https://cs-api-dev.mop.ba'
  },
  production: {
    ...defaultConfig,
    cacheMiddlewareBaseEndpoint: 'https://cs-api-dev.mop.ba'
  }
};

module.exports = config[process.env.NODE_ENV];

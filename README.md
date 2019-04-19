# Culture Squad

Website for the Edgeryders "Culture Squad", built in Vue.js / Nuxt.js, displaying content retrieved from the edgeryders.eu Discourse platform

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes

### Installing

A step by step series of examples that tell you how to get a development env running

```
# install dependencies - execute the command in project root:
$ yarn install

# install dependencies for culture-squad cache api - navigate to culture-squad-cache-api folder and execute the command:
$ npm install

# while in culture-squad-cache-api folder, execute the command to run cache middleware application (it should be started before website):
$ npm run dev

# then navigate back to project root
# serve website with hot reload at localhost:3000 (development)
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate:staging
$ yarn generate:production
```

## Built With

* [Nuxt.js docs](https://nuxtjs.org) - The web framework used for website
* [Express.js docs](https://expressjs.com/) - The NodeJS framework used to set up cache middleware app


## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) 

## NOTES

* Template used is [Prototype](https://pixelarity.com/prototype) but refactored and adjusted with Bootstrap 4 (in Vue.js environment)
* Navigate to hidden page ``/theme-kit`` where you can see the overview of Bootstrap elements used 
* In styles folder at the project root, just replace the ``theme`` folder with another one to apply new theme
* Website isn't directly connected to Edgeryders Discourse API but to cache middleware API (mini NodeJS/Express application that retrieves data from Discourse API and caches it)
* Cache middleware application code is located at website's project root in ``culture-squad-cache-api`` folder at the moment, but it can be moved to dedicated repository 
* Cache middleware app is available on https://cs-api-dev.mop.ba
* It exposes only one GET endpoint and is used as `https://cs-api-dev.mop.ba/get-data?endpoint={edgerydersDiscourseEndpoint}`
* Example (to get data for Burning now page): 

  `https://cs-api-dev.mop.ba/get-data?endpoint=
  https://edgeryders.eu/tags/webcontent-culturessquad-burning`

* Cache middleware app appends Discourse `api_key` query param (for authentication) and adds `Accept application/json` header (to return data in `JSON` format) internally, so you don't need to add `.json` extension to `edgerydersDiscourseEndpoint` string

* By default, Discourse API returns `HTML` if you call endpoint without `.json` extension

* Cache middleware application runs cron job that periodically triggers `Netlify` build hook that rebuilds website (website is built with [Nuxt.js](https://nuxtjs.org) as mentioned already and hosted on [Netlify](https://www.netlify.com), actually static generated data is hosted on `Netlify` as it is feature of `Nuxt.js`, so if change in API data occurs, the site should be rebuilt periodically to generate static files with new data, thus cron job is added)
---
### Website is available at: https://cs-dev.mop.ba

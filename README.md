# Geele-vuejs

A set of examples used at the [Vue Global Summit by Geekle](https://geekle.us/vue) to show how to build micro-frontends in Bue.js

See ppt presentation for details.

## Folders

Each folder contains a different example.

In details:

- 1-basic-example: a simple example of a container app with 2 instances of the same micro-frontend. This method uses custom-elements to mount/unmount the micro-frontend. To open, just double click on the index.html

- 2-imperative-method-example: another way to create micro-frontends with Vue.js. This method programmatically injects the micro-frontend in a dedicated div. To open, just double click on the index.html

- 3-multiple-framework-example: an example of how a Vue.js micro-frontend and angular app can run on the same page. To open, just double click on the index.html

- 4-vue-3.0-example: an example of a Vue.js microfrontend imported into a container app. To run:

  - `npm install` in hello-world
  - `npm run build` in hello-world
  - `npm install` in cdn
  - `npm install` in main-app
  - `npm start` in main-app

- 5-mfe-routing-example: an example of how to build micro-frontends in Vue.js and Webpack5. To run:

  - `npm install` in hello-world
  - `npm run build` in hello-world
  - `npm install` in wassup-world
  - `npm run build` in wassup-world
  - `npm install` in cdn
  - `npm install` in main-app
  - `npm start` in main-app

- 6-webpack-5-example: an example of how to build micro-frontends in Vue.js and Webpack5. To run:
  - `npm install` in hello-world
  - `npm install` in cdn
  - `npm install` in main-app
  - `npm start` in main-app

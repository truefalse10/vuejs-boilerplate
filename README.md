# vuejs - webpack3 - jest - boilerplate

> this is the boilerplate I use for new vuejs projects. It is built upon the official [vuejs webpack template](http://vuejs-templates.github.io/webpack/) but uses webpack 3 and some other configurations.

## Features

* webpack 3
* jest (including snapshot testing)
* vue-test-utils (careful: still in beta!)
* eslint (based on airbnb)
* sass-loader
* dockerfile
* [prettier](https://prettier.io/) (automatic code formatter)

## Enable prettier in vscode
prettier is a  opiniated code formatter that automatically formats your .js and .vue files on document save. To enable this feature in vscode do:

* install plugins `vetur`, `prettier`, `eslint`
* add to your vscode settings:
```javascript
"emmet.syntaxProfiles": {
  "vue-html": "html"
},
"emmet.includeLanguages": {
  "vue-html": "html"
},
"eslint.validate": [
  "javascript",
  "vue"
],
"editor.formatOnSave": true,
"prettier.eslintIntegration": true,
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run tests
npm test

# run tests and watch
npm test -- --watch
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# vuejs - webpack3 - jest - boilerplate

> this is the boilerplate I use for new vuejs projects. It is built upon [vue-cli](https://cli.vuejs.org/) and uses some personal configurations.

## Features

- based on vue-cli3
- jest & @vue/test-utils
- eslint (based on airbnb)
- sass-loader
- dockerfile
- [prettier](https://prettier.io/) (automatic code formatter)

## Enable prettier in vscode

prettier is a opiniated code formatter that automatically formats your .js and .vue files on document save. To enable this feature in vscode do:

- install plugins `vetur`, `prettier`, `eslint`
- add to your vscode settings:

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

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run tests
npm test:unit

# run tests and watch
npm test:unit -- --watch
```

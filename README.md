![react-redux-saga-boiolerplate](https://codemotion.ninja/wp-content/uploads/2018/09/Using-Redux-saga-with-React.jpg)

# react-redux-saga-boilerplate

A lightweight react redux saga boilerplate for a scalable development that focus on performance and best practices. This project uses React Hook functionality like a custom useReducer and useSaga for code-splitting.

## Demo

<p align="center">
  <img width="600" src="src/resources/images/rrsb.gif">
</p>

## Quick Start

- Make sure that you have Node.js `v8^` and npm `v5^` installed.
- git clone project and then `cd <YOUR_PROJECT_NAME>`
- `git clone --depth=1 https://github.com/ayepRahman/react-redux-saga-boilerplate.git <YOUR_PROJECT_NAME>`
- install dependencies.

```
$ npm install

#or

$ yarn
```

- to run the project, server will run on `http://localhost:3000/`

```
$ npm run start

#or

$ yarn start
```

- to run tests

```
$ npm run test

#or

$ yarn test
```

## Flow Chart

![flow chart](https://cdn-images-1.medium.com/max/800/1*y-qgopNVlYcVrXgM84iPfA.jpeg)

## Features

### Quick scaffolding

Create components, containers, actions, selectors, sagas and more right from the CLI!

### Component-centric splitting

Build with `react-loadable` a higher-order component (a function that creates a component) which lets you dynamically load any module before rendering it into your app.

### Internationalization framework

The module provides multiple components eg. to assert that needed translations get loaded or that your content gets rendered when the language changes.

### Out of the box React Ui/CSS framework (React-bootstrap)

By default we're using [react-boostrap](https://react-bootstrap.github.io) for our react ui framework.

### Absolute Import Path

You can absolute import e.g `import { Button } from 'components/button'`

### Styling (SASS, styled-components)

This project bootstrap using Create React App. Check the styling guide below.
[Create React App Styling Guide](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet)

1. Styled Components (recommended!)

Visual primitives for the component age.
Use the best bits of ES6 and CSS to style your apps without stress.
Included in code generator, give you an option to use styled-components.

2. SASS

To use Sass, first install node-sass:

```
$ npm install node-sass --save

#or

$ yarn add node-sass
```

Now you can rename src/App.css to src/App.scss and update src/App.js to import src/App.scss. This file and any other file will be automatically compiled if imported with the extension .scss or .sass.

To share variables between Sass files, you can use Sass imports. For example, src/App.scss and other component style files could include @import "./shared.scss"; with variable definitions.

This will allow you to do imports like

```
@import 'styles/\_colors.scss'; // assuming a styles directory under src/
@import '~nprogress/nprogress'; // importing a css file from the nprogress node module
```

### Pre-Commit Linter

Build in linter on git pre-commit using lint-staged, eslint and prettier.

## Available Scripts:

### Running extract messages and auto translate.

This script allow extracting messages from i18next translation function `t('key','value')` , auto translate using google cloud translation and add to `src/i18n/locales/` directories.

#### Requirement

To use this tool with Google Translate, you need to obtain valid credentials from Google. Here the [link](https://cloud.google.com/translate/docs/quickstarts) to the quickstart guide. Once you have downloaded JSON key, You can specify the location of your downloaded JSON key file using the -c or --config option.

##### example

`"autotranslate": "json-autotranslate --input ./src/i18n/locales --service google-translate -d --config ./src/config/google/key-google.json"`

#### To extract

```
$ npm run extract-messages

#or

$ yarn extract-messages
```

#### Directory Structure

Your locales directory should look like this:

```
locales
├── de
├── en
│   ├── translations.json
├── fr
└── it
```

#### Available options

```
Options:
  -i, --input <inputDir> the directory containing language directories (default: ".")
  -l, --source-language <sourceLang> specify the source language (default: "en")
  -t, --type <key-based|natural|auto> specify the file structure type (default: "auto")
  -s, --service <service> selects the service to be used for translation (default: "google-translate")
  --list-services outputs a list of available services
  -m, --matcher <matcher> selects the matcher to be used for interpolations (default: "icu")
  --list-matchers outputs a list of available matchers
  -c, --config <value> supply a config parameter (e.g. path to key file) to the translation service
  -f, --fix-inconsistencies automatically fixes inconsistent key-value pairs by setting the value to the key
  -d, --delete-unused-strings deletes strings in translation files that don't exist in the template
  -h, --help output usage information
```

### Code genarators

Build using plop a little tool that saves you time and helps your team build new files with consistency e.g component, containers.

#### To Run

```
$ npm run generate

#or

$ yarn generate
```

<p align="center">
  <img width="600" src="src/resources/images/generator.gif">
</p>

## Todolists

- Badges coverage, building

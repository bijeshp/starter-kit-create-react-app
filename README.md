# Starter Kit CRA
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In addition to the standard capabilities this is fully configured with developer productivity tools and the additional technologies from the react eco system

## Technologies and Libraries
- Application State : Redux
- Async Data Management : Redux Saga
- Declarative Routing : DOM bindings for React Router react-router-dom
- Static Type Checking :Flow
- REST API handling :Axios

## Development GuideLines

Basic Conventions
### 1. Modules :
A module is a logical grouping of related functionality, which maintain a namespace for data , routes and other related functionalities. A module typically contains the following parts
#### Pages
Defines a Container component and mounted on a route, Pages are the only connected components in a module. Data will be passed to the child components via props.All the page level components are defined in the components folder of each page.
Note : Its import to connect the reqStatus, isLoading,serviceError properties in each page as standard which helps to handle application state during the asynchronous data fetching.
#### index.js
Index.js of the module exports all the pages in the module. For example
#### routes.js
routes.js registers the routing for the module pages and the respective components to be mounted on the routes. For example
#### reducer.js
This defines the module reducer. Every reducer must contain following properties as default which helps to handle the application state during the asynchronous data fetching
#### actions
The *action.type.js *file defines the constants for all action types of the modules and the index.js file in the action directory defines all the actions for the module Note: If required actions can be grouped and separated in different module and then imported and exported form the index file .
#### sagas
Since we use redux saga middleware for asynchronous data handling , the module level sagas are specified in the sagas folder.the index file in sagas export all sagas belongs to the module.

### 2.Adding / Registering a New Module
When ever we add a new block/module of functionality to the application , It needs to be registered with the root application. The advantage of using this approach is each module level functional aspects are grouped into a module folder and in future if the application complexity increases and the module has to be separated into a new project is will easy to separate out.

### 3.Registering Module Routes to the application
The index file in the /src/routes/ directory imports and registers all the module level routes to the root application. It is important to note that AppBaseRoutes has to be placed always at last to handle non matching routes and error pages.

### 4.Registering Module Store to the application
#### Registering Sagas
The sagas file in the /src/store/ directory imports and registers all the module level sagas to the root application.The module level sagas must be imported and added to the application sagas.

#### Registering Reducer
The reducers file in the /src/store/ directory imports and combines all the module level reducers to the root application.The module level reducers must be imported and added to the combineReducers method in the application reducer.


## Available Scripts

In the project directory, you can run:

### `yarn`

This install all the dependencies.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn build`
Builds the app for production to the build folder.It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

### `yarn serve:build`
This uses serve to run the application as a static file server with the built content in port `3002`

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Some VS Code Tools For developer productivity
#### Code Linting and Formatting

- Prettier - Code formatter(esbenp.prettier-vscode)
- SCSS Formatter(sibiraj-s.vscode-scss-formatter)

#### Local File Check point(SOS)
Local History(xyz.local-history)

#### Code Quality

- Code Spell Checker(streetsidesoftware.code-spell-checker)
#### Language Support Plugins

- JavaScript (ES6) code snippets(xabikos.javascriptsnippets)
- Code Spell Checker
- SCSS - Flow Language Support(flowtype.flow-for-vscode)
####  Others

- Path Auto Complete(ionutvmi.path-autocomplete)
- AsciiDoc(Mark Down Previews)(stayfool.vscode-asciidoc)
- Import Cost(wix.vscode-import-cost)

# Isntall libraries:

Following is shown the requiered libraries in the project.

- Sass: ` npm install node-sass`

- eslint:

  - Execute the command: `npm install -D eslint`
  - Rule confiuration: `npx eslint --init`

    Rules confiuration is:

    ```
    ❯ npx eslint --init
    You can also run this command directly using 'npm init @eslint/config'.
    ✔ How would you like to use ESLint? · style
    ✔ What type of modules does your project use? · esm
    ✔ Which framework does your project use? · react
    ✔ Does your project use TypeScript? · No / Yes
    ✔ Where does your code run? · browser
    ✔ How would you like to define a style for your project? · guide
    ✔ Which style guide do you want to follow? · airbnb
    ✔ What format do you want your config file to be in? · JSON
    Checking peerDependencies of eslint-config-airbnb@latest
    The config that you've selected requires the following dependencies:

    eslint-plugin-react@^7.28.0 eslint-config-airbnb@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.3 eslint-plugin-jsx-a11y@^6.5.1 eslint-plugin-react-hooks@^4.3.0
    ✔ Would you like to install them now with npm? · No / Yes
    Installing eslint-plugin-react@^7.28.0, eslint-config-airbnb@latest, eslint@^7.32.0 || ^8.2.0, eslint-plugin-import@^2.25.3, eslint-plugin-jsx-a11y@^6.5.1, eslint-plugin-react-hooks@^4.3.0
    ```

  - In the created file `.eslintrc.json` add the following rules:
    ```json
    "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/react-in-jsx-scope": "off",
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "consistent": true,
          "multiline": true
        },
        "ObjectPattern": {
          "consistent": true,
          "multiline": true
        },
        "ImportDeclaration": {
          "consistent": true,
          "multiline": true
        },
        "ExportDeclaration": {
          "multiline": true,
          "minProperties": 3
        }
      }
    ]
    }
    ```

## Vscode configuration

- create the `.vscode` folder and the `settings.json` file
- in the `.vscode/settings.json` file set the following sentence
  `json { "editor.formatOnSave": true, }`

- Install `EditorConfig for VS Code`
- create the `.editorconfig` file with the following sentences:

  ```
  root = true
  # Unix-style newlines with a newline ending every file
  [*]
  end_of_line = lf
  insert_final_newline = true

  charset = utf-8
  trim_trailing_whitespace= true
  insert_final_newline=true

  indent_style=space
  indent_size=2
  ```

- Install `ESLint` in vscode
- Install `Prettier - Code formatter` in vscode
  - Create the `.prettierrc` file in the project root. Here may be set some rules such as:
  ```json
  {
    "printWidth": 80
  }
  ```

## Routes configuration:

- Install react router dom with `npm install react-router-dom@6`
- Create the 'routes' folder with the files `routes.js` and `MainRouter.js`.
  The rotes in the project (defined in the routes.js) are:
  ```json
  export const ROUTE_HOME = '/';
  export const ROUTE_PRODUCT_DETAIL = './detail';
  export const ROUTE_ABOUT = './about';
  ```

## Create the mains pages

The project consist of tree "pages": `home`, `detail` and `about`. The pages are create in the `pages` folder, through the following files `HomePage.jsx`, `ProductDetailPageg.jsx` and `AboutPage.jsx`, respectively.

## Create components

The components are create in the `components` folder and they are:

### NavBar

### ProductCard

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Table of contents

1. [Introduction](#introduction)
2. [Exercise problem](#exercice-problem)
3. [Libraries and packages installation](#libraries)
4. [VSCode configuration](#vscode)
5. [Routes configuration](#routes-configuration-a-name%22routes%22a)
6. [Components](#create-components-a-name%22components%22a)

<a name="introduction"></a>

# 1. Introduction

<a name="exercice-problem"></a>

# 2. Exercise problem

# 3 Isntall libraries <a name="libraries"></a>

Following is shown the requiered libraries in the project.

## 3.1 Sass<a name="sass"></a>:

` npm install node-sass`

## 3.2 Eslint<a name="eslint"></a>:

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

# 4. Vscode configuration <a name="vscode"></a>

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

# 5. Routes configuration <a name="routes"></a>

- Install react router dom with `npm install react-router-dom@6`
- Create the 'routes' folder with the files `routes.js` and `MainRouter.js`.
  The rotes in the project (defined in the routes.js) are:
  ```json
  export const ROUTE_HOME = '/';
  export const ROUTE_PRODUCT_DETAIL = './detail';
  export const ROUTE_ABOUT = './about';
  ```

# 6. Create the mains pages <a name="mainPages"></a>

The project consist of tree "pages": `home`, `detail` and `about`. The pages are create in the `pages` folder, through the following files `HomePage.jsx`, `ProductDetailPageg.jsx` and `AboutPage.jsx`, respectively.

# 7. Create components <a name="components"></a>

The components are create in the `components` folder and they are:

## 7.1 NavBar<a name="navBar"></a>

## 7.2 ProductCard <a name="productCard"></a>

- Instal Proptypes through the following sentence `npm install prop-types`.
  The propTypes are defined as (see `./components/ProductCard/ProductCard.jsx`):
  ```
  ProductCard.propTypes = {
  productsDetails: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  };
  ```
  where `ProductCard` is the componnet that receives the props, `productsDetails` is the const used to destructuring, and `image` and `title` are the properties of the props received.

## 7.3 Countdown <a name="countDown"></a>

The countdown component was implemented following the instructions of the site ["How to create a countdown timer using React HooksHow to create a countdown timer using React Hooks"](https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks)

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

```

```

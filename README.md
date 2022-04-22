# Table of contents

1. [Ejercicio](#introduction)
2. [Libraries and packages installation](#libraries)
3. [VSCode configuration](#vscode)
4. [Routes configuration](#routes)
5. [Main pages](#mainPages)
6. [Components](#components)
7. [Run app](#run-app)

# 1. Answer to exercise "subasta de productos" <a name="introduction"></a>

![fishy](./src/figures/flex-box-media-query-v2.gif)

# 2 Install libraries <a name="libraries"></a>

Following is shown the requiered libraries in the project.

## 2.1 Sass<a name="sass"></a>:

` npm install node-sass`

## 2.2 Eslint<a name="eslint"></a>:

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

# 3. Vscode configuration <a name="vscode"></a>

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

# 4. Routes configuration <a name="routes"></a>

- Install react router dom with `npm install react-router-dom@6`
- Create the 'routes' folder with the files `routes.js` and `MainRouter.js`.
  The rotes in the project (defined in the routes.js) are:
  ```json
  export const ROUTE_HOME = '/';
  export const ROUTE_PRODUCT_DETAIL = './detail';
  export const ROUTE_ABOUT = './about';
  ```

# 5. Create the mains pages <a name="mainPages"></a>

The project consist of tree "pages": `home`, `detail` and `about`. The pages are create in the `pages` folder, through the following files `HomePage.jsx`, `ProductDetailPageg.jsx` and `AboutPage.jsx`, respectively.

# 6. Create components <a name="components"></a>

The components are created in the `components` folder and they are NavBar, ProductCard and CountDown.

## 6.1 NavBar<a name="navBar"></a>

## 6.2 ProductCard <a name="productCard"></a>

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

## 6.3 Countdown <a name="countDown"></a>

The countdown component was implemented following the instructions of the site ["How to create a countdown timer using React Hooks"](https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks)

# 7. Getting Started with Create React App <a name="run-app"></a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

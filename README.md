# Macm316 - Numerical Method Visualizer
  <img src="./public/preview.png"/>

<div>
    <a href=".">
      <img src="https://github.com/sfu-software-engineering-club/numerical-method-visualizer/actions/workflows/node.js.yml/badge.svg"/>
    </a>
<div>

Macm316 provides a visualization and plotting tool for numerical methods in Numerical Analysis. This version of the calculator currently supports two differentiation methods:  
<ul>
  <li>Midpoint Rule</li>
  <li>Three-points Lagrange Polynomial Interpolation</li>
</ul>
and two integration methods:  
<ul>
  <li>Trapezodial Rule</li>
  <li>Composite Simpson 1/3 Rule</li>
</ul>

It enables you to modify properties and functions for approximation. By using MathJax, we display the estimation calculation and formula along with the graph plot.  

You can resize both the menu and the graph by dragging the divider next to the graph legend.  

The demo website is live at  
https://sfuswso.github.io/Macm316/


## Available Scripts

To begin, install the necessary packages with the following command:
`
npm install
`

### `npm start`

This command runs the app in development mode on your local environment. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

<img width="500px" src="./public/jest_test_sample.png"/>

This command launches the test runner in watch mode. Our test coverage relies on Jest and React-Testing-Library.

### `npm run build`

This command builds the app for production into the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run prettier`

Run Prettier to automatically correct the formatting. Please check `.prettierrc.json` to see our team's convention settings.

### `npm run lint`
### `npm run lint:fix`

Run ESLint to scan and correct the formatting and maintain the code styling convention. Please check `.eslintrc.json` to see our team's convention settings.

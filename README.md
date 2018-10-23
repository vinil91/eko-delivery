# Eko Delivery Routes Calculator

Eko Delivery Web Service allows you to get information about Eko delivery service features. After entering of all available routes app allows to
count price of previously known route or select an optimal route by yourself.

Service is available through the link: https://vinil91.github.io/eko-delivery/

## Requirements
You need [Node](https://nodejs.org/en/). And that's it.:heart:
## Install
    $ git clone https://github.com/vinil91/eko-delivery.git
    $ npm install
## Start & watch
    $ npm run start
or just go to: https://vinil91.github.io/eko-delivery/
## Simple build for production
    $ npm run build
## Languages & tools
### JS & JSX
- [ESLint](https://eslint.org/) is used to check coding conventions.
- [React](http://facebook.github.io/react) is used for UI.
### CSS
- [BEM methodology]https://en.bem.info/methodology/css/) is used to make css more 
- [Bem-Cn](https://www.npmjs.com/package/bem-cn) is used to generate class names. Great for React.
### Others
- [GitHub-Pages](https://pages.github.com/) is used for deployment
## The Problem and Solution
The problem is to make solution for input available routes, and with their help get information about price of delivery, amount of possible delivery route and find the cheapest way of delivery.
For solution I've made React App, because it's the most comfortable and easy-to-read solution to the problem.
For counting I've used graph theory with the well-known dijkstra algorithm.
The combination of using graph and React makes the solution really nice. I hope'll like it too.

The screenshot of the successfully dealt CaseOne(count the cost of delivery) is presented below:

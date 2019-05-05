## Lightweight React WebApp Skeleton

A slim boilerplate for React projects. Features [express](https://github.com/expressjs/express), [jest](https://github.com/facebook/jest), [eslint](https://github.com/eslint/eslint), and [Docker](https://github.com/docker) integration.

## Features

#### Build and Serve (Express.js)

Build to `build/` directory with `yarn run build` command, or build and serve with `yarn run serve`.

#### Docker

Build Docker with `yarn run docker:build` command, or build and run with `yarn run docker:run`

#### Testing

Test with jest using `yarn run jest`.

#### Webpack Dev Server

Start [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with `yarn run start:dev`.

## Getting started

### Prerequisites

To install this project, you should have Node.js, yarn, and Docker installed.

- [Node.js](https://nodejs.org)
- [yarn](https://yarnpkg.com/en/)
- [Docker](https://docker.com)

### Installing

Enter the directory you want to start the project in, and clone the source.

```
git clone https://github.com/BrandonRush/react-skeleton.git
```

Install all dependencies with yarn.

```
yarn install
```

## Project Structure

```bash
/
├── assets/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── build/
├── node_modules/
├── server/
│   └── components/
│       └── Html.js
├── src/
│   ├── app/
│   │   ├── actions/
│   │   ├── components/
│   │   │  ├── App.js
│   │   │  └── App.test.js
│   │   ├── containers/
│   │   │  └── index.js
│   │   ├── reducers/
│   │   │  └── index.js
│   │   └── index.js
│   └── models/
│       └── index.js
├── .babelrc
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── .travis.yml
├── Dockerfile
├── jest.config.js
├── LICENSE.md
├── package.json
├── README.md
├── server.js
├── webpack.config.js
└── yarn.lock
```

## Deployment

...

## Built With

- [React](https://github.com/facebook/react) - JavaScript library for building user interfaces
- [Express.js](https://github.com/expressjs/express) - Web application framework for Node.js
- [Webpack](https://github.com/webpack/webpack) - A module bundler for JavaScript
- [Babel](https://github.com/babel/babel) - A compiler and transpiler for JavaScript
- [yarn](https://github.com/yarn/yarn) - Dependency Management

## Authors

- **Brandon Rush** - _Initial work_ - [BrandonRush](https://github.com/BrandonRush)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Inspired partly by https://www.reactstarterkit.com

# Angular ES6/ES2015 App Skeleton

This repo gives you a basic Angular 1.5 app skeleton following best practices outlined by [Todd Motto](https://github.com/toddmotto/angular-styleguide/blob/master/README.md), as well as Javascript code style recommended by [Airbnb](https://github.com/airbnb/javascript). It uses ES6 syntax and Webpack for bundling and development tools. 

The skeleton has the basic page structure for a single page web application, including a header, nav, main content area, and footer. There are a couple mock app modules to get you started. They also contain tests and a starter karma and protractor configuration. 

** Application Structure:**
```
/modules/   <-- application pages / screens grouped topically
/common/    <-- common, reusable code (components, directives, styles, etc)
app.js      <-- entry point
index.html
```

This was my first dive into Angular, and coming from the React-world, the [component based approach](https://toddmotto.com/stateful-stateless-components) makes the most sense to me from an application design perspective. Component-based architecture appears to be the emerging standard for web application development, and is core to the React philosophy as well as the new Angular 2 framework. I tried to incorporate industry standard best practices, but I'm still new to Angular so feel free to suggest improvements. 

## Installation

```
git clone https://github.com/seanmclucas/ng-es6-skeleton.git
```

## Running The App For Development

```
npm install
npm start
```

`npm start` will start up the webpack dev server on port 3000. This gives you [Auto Refresh](https://webpack.github.io/docs/webpack-dev-server.html), which drastically speeds up development and debugging. Let me know if you have any problems running it. [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) coming soon.

## Bundling For Production

```
npm run build:prod
```

## Running The Unit Tests

```
npm run test:unit

OR 

npm run test:unit-watch
```

## Running The End-To-End Tests

```
npm run test:e2e-server
npm run test:e2e
```

## Linting
TODO: Notes about SublimeLinter config
Fix issue with common base path resolves

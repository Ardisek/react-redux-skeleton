# react-redux-skeleton
This project uses [react](https://github.com/facebook/react), [redux](https://github.com/rackt/redux) and [react-router](https://github.com/ReactTraining/react-router) as it's basis and forms a skeleton around these tools to allow you to get your app started quickly and easily.

This skeleton is suitable for both small and larger apps with multiple routes and numerous components and connecting to APIs.

This skeleton allows you to display sample users as well as sample announcements.

## Installing

Install with:

```
$ npm i
```

Run the webpack dev server with:

```
$ npm run webpack
```

## Components & Containers

It is important to maintain a distinction between dumb components that simply render content and smart components (containers) that handle business logic. This separation increases the reusability of both types.

A component must only contain html (jsx) and styling, deferring any dom events to it's parent container. Containers define event handlers and pass these to their children, they must not include any styling or content.

## Modules: components, containers, actions, reducers and dispatching

Modules are stored in `app/module/`.

## Routes

App's routes are defined in main component `app/module/application/components/app.js`.

## CRUD

You can find out how to handle all crud actions in `app/module/application/services/api.js`.

## Project Structure

```
├── app                      # Application source code
    ├── module               # Main route definitions and async split points
    │   ├── announcement     # Sample module which allows you to display sample announcements
    │   │   ├── actions      # Announcement module actions
    │   │   ├── components   # Announcement module components
    │   │   ├── containers   # Announcement module containers
    │   │   └── reducers     # Announcement module reducers
    │   ├── application      # Main module of application
    │   │   ├── actions      # Application module actions
    │   │   ├── components   # Application module components
    │   │   ├── containers   # Application module containers
    │   │   ├── reducers     # Application module reducers
    │   │   │   └── index.js # Reducer registry and injection
    │   │   ├── services     # Application services (crud actions handling)
    │   │   └── utils        # Useful utilities like ErrorHandler
    │   ├── home             # Home module
    │   │   ├── actions      # Home module actions
    │   │   ├── components   # Home module components
    │   │   ├── containers   # Home module containers
    │   │   └── reducers     # Home module reducers
    │   └── user             # User module (registration and displaying users)
    │       ├── actions      # User module actions
    │       ├── components   # User module components
    │       ├── containers   # User module containers
    │       └── reducers     # User module reducers
    ├── public               # Redux-specific pieces
    │   ├── css              # External css
    │   ├── fonts            # Fonts
    │   └── stylesheets      # SCSS files
    └── img                  # Application images
```

# React Video On-Demand

A small React and Node carousel application providing the functionality to display and list a collection of videos, a modal to preview each videos movie and related information.

- API being consumed: https://demo2697834.mockable.io/movies

## Prerequisities

To ensure a succesful build you must first ensure you have your development environment setup, below is a list of requirements for this project:

- You have NodeJS installed on your system - [You can download from NodeJS](https://nodejs.org/en/). NodeJS provides a package manager `NPM` which is used to install and manage project dependencies as well as running the project scripts.
- This project was developed using [Yarn Package Manager](https://yarnpkg.com/en/), this dependency can be installed using `NPM` by running the command `npm install yarn` from your Terminal or Command Prompt application.

## Set-up and Build

1. Pull down the repository from [GitHub](https://github.com/rous6026nz/video-on-demand-app)
2. Open a new Terminal or Command Prompt session in the recently created `video-on-demand-app` folder.
3. Run the following command in your Terminal or Command Prompt application `yarn` to install all the required dependencies to get the application up and running.
4. Run `yarn dev` to start the development server, build and run the application. This starts the application in development mode with live reloading.

## Features Implemented

- Loading data from the API provided.
- The user is able to select and view a movie in a modal or in fullscreen.
- Displaying a second 'Recently Watched' carousel showing the recently viewed movies, which updates and re-sorts the contents with the most recent movie positioned at the start.
- The layout is responsive with a mobile-first approach.

### Features Not Implemented

- Full functioning carousel.
- Accessibility - User being able to navigate carousel and select a video using the keyboard arrows/Enter keys.

## Bugs

- The current implementation for the carousel back control is not working as intended, causing the carousel to be positioned at the incorrect position.
- Current `ref` for the carousel `inner-wrapper` is not returning the HTML element, resulting in the hard coding of the width value in state. This seems to be an issue associated to forwarding multiple `refs` as props on a single component?
- Due to the issue highlighted above, the 'Recently Watched' carousel always displays a forward carousel control and triggers the same behaviour as if it was filled with content.

## Feature Roadmap

#### Carousel Code Restructure

- Move all carousel container code into a component, so the carousel container is able to focus on handling the carousel logic.

#### App Container Clean-up

- Move alot of the logic inside the App container responsible for handling the populating of the data into the carousels and handling the `Recently Watched` over to the carousel container component.

#### Browser Support

The initial intention of this application was to meet requirements of the task which included being able to build without errors in MacOS/Linux environment and support the latest version of the Chrome browser. However, I intend on extending this to support most versions of Chrome, Firefox, Safari and Edge browsers for both Windows and MacOS platforms.

## Technolgy Stack

- HTML
- CSS
- JavaScript (ES6)
- ReactJS - including React Hooks and CSS Modules
- NodeJS
- Express
- Yarn

#### Demo

Coming soon ;-)
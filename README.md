# React Video On-Demand

A small React and Node carousel application providing the functionality to display and list a collection of videos, a modal to preview each videos movie and related information.

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
- Current `ref` for the carousel `inner-wrapper` is not returning the HTML element, resulting in the hard coding of the width value in state.
- Due to the issue highlighted above, the 'Recently Watched' carousel always displays a forward carousel control and triggers the same behaviour as if it was filled with content.

## Technolgy Stack

- HTML
- CSS
- JavaScript (ES6)
- ReactJS - including React Hooks and CSS Modules
- NodeJS
- Express
- Yarn
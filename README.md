# NY-ARTICLES-APP

This project is created as an assessment exercise to demonstrate the listing and details of most popular articles utilizing nytimes api.

## Description

The application shows list of popular articles as fetched by external api using set parameters.\
Once you click on any item to view full article it opens the article in another tab.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn eslint`

Run eslint on the code

### `npx cypress open`

Used to run E2E Cypress tests on local \
Ensure application is running using yarn start \
Run `npx cypress open` \
Select E2E Testing in chrome \
Select spec.cy.js 

### `yarn sonar`

1. Before this step - Run SonarQube using sonar.sh on local

### Libraries Used in The project

1. Material UI - For layout and icons
2. Redux Toolkit
3. React Testing Library
4. Cypress
5. eslint

### Structure of App

1. The ArticleList component lists all popular articles filtered by days selected in period filter.
2. The ArticleListItem component represents each item in the grid
3. Changing the filter reloads the list for the selected filter
4. Clicking on link for any article in list opens article in new tab

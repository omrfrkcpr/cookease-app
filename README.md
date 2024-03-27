# Cookease App ©️

💻 https://cookease-app.netlify.app/

## Description

This single-page react recipe application is a platform where users can find various recipes with detailed information and save their favorites after logging in to the site.

## Outcome

## Project Planning & Management

**Epic User Story:** As a user of the recipe app, I want to be able to browse recipes, save my favorite recipes, view detailed information about each recipe, and navigate through different pages of the app seamlessly. 🎖️

**User Stories:**

1️⃣ **Browse Recipes:**

- 🥇 As a user, I want to be able to search for recipes based on their names.
- 🥈 As a user, I want to see a list of recipes matching my search query.
- 🥉 As a user, I want to be able to click on a recipe to view its details.

  Task-1 = Implement API integration to fetch recipes based on search queries.
  Task-2 = Display search results on the home page.
  Task-3 = Implement functionality to navigate to the recipe details page when a recipe is clicked.

2️⃣ **Save Favorite Recipes:**

- 🥇 As a user, I want to be able to mark a recipe as a favorite.
- 🥈 As a user, I want my favorite recipes to be saved for future reference.
- 🥉 As a user, I want to be able to view my list of favorite recipes.

  Task-1 = Create a context provider to manage favorite recipes.
  Task-2 = Implement functionality to add and remove recipes from favorites.
  Task-3 = Display favorite recipes on the favorites page.

3️⃣ **View Recipe Details:**

- 🥇 As a user, I want to be able to view detailed information about a recipe, including its ingredients, nutrition facts, cuisine type, and country flag.
- 🥈 As a user, I want to have the option to visit an external website for more information about a recipe.
- 🥉 As a user, I want to be prompted to login before viewing recipe details if I'm not already logged in.

  Task-1 = Design the recipe details page layout.
  Task-2 = Fetch and display detailed information about a recipe, including ingredients, nutrition facts, cuisine type, meal type and country flag.
  Task-3 = Implement functionality to visit an external website for more information about a recipe.

4️⃣ **Navigate Through Pages:**

- 🥇 As a user, I want to be able to navigate between different pages of the app using the navigation bar.
- 🥈 As a user, I want to see relevant information on each page, such as recipe search results on the home page and general information about the app on the About page.

  Task-1 = Implement React Router for navigation between different pages.
  Task-2 = Design and implement the navigation bar component using styled-components. Ensure it has a responsive design to adapt to different screen sizes.
  Task-3 = Ensure relevant information is displayed on each page.

5️⃣ **User Authentication:**

- 🥇 As a user, I want to be able to login to access certain features of the app, such as viewing recipe details.
- 🥈 As a user, I want to be redirected to the recipe details page after successfully logging in if I was previously trying to access a specific recipe.

  Task-1 = Implement user authentication using a backend service or authentication provider.
  Task-2 = Design and implement the login page using styled-components. Ensure it has a user-friendly interface with proper input fields and buttons.
  Task-3 = Redirect users to the recipe details page after successful login if applicable.

6️⃣ **Handle Page Not Found:**

- 🥇 As a user, I want to be redirected to the home page if I enter a non-existent URL or try to access an undefined page.
- 🥈 As a user, I want to see a message informing me about the redirection and have the option to manually navigate to the home page.

  Task-1 = Design and implement the not found page layout using styled-components. Ensure it has a visually appealing design with clear messaging.
  Task-2 = Implement functionality to redirect users to the home page after a certain time period.
  Task-3 = Display a message informing users about the redirection option.

**Additional Requirement:** 💥

- The application should have a responsive design.

## Project Skeleton 🩻

```
📖Recipe App (folder)
|
├── 📁public
|     ├── index.html
│     └── manifest.json
├── 📁src
│    ┣ 📂assets
│    ┃       ┗ [images and gifs]
│    ┣ 📂components
│    ┃       ┣ 📂styles (styled-components)
|    ┃       ┃      ┣ ButtonS.js
│    ┃       ┃      ┣ ContainerS.js
|    ┃       ┃      ┣ HeaderS.js
│    ┃       ┃      ┣ HyperLinkS.js
|    ┃       ┃      ┣ ImageS.js
│    ┃       ┃      ┣ InputS.js
│    ┃       ┃      ┣ ListS.js
│    ┃       ┃      ┗ SpanS.js
|    ┃       ┃
│    ┃       ┣ Footer.jsx
│    ┃       ┣ Header.jsx
│    ┃       ┣ LoginForm.jsx
│    ┃       ┣ Navbar.jsx
│    ┃       ┣ NotFound.jsx
│    ┃       ┣ RecipeCard.jsx
│    ┃       ┗ SearchForm.jsx
|    ┃
│    ┣ 📂context
|    ┃    ┗ AppProvider.js
|    ┃
│    ┣ 📂pages
│    ┃       ┣ About.js
│    ┃       ┣ Details.js
│    ┃       ┣ Favorites.js
│    ┃       ┣ Home.js
│    ┃       ┗ Login.js
│    ┃
│    ┣ 📂router
│    ┃       ┗ AppRouter.js
|    ┃
│    ┣ App.js
│    ┗ index.js
|
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## Objective

Build a Recipe App using ReactJS.

### At the end of the project, following topics are to be covered; 🎯

- HTML & CSS & JS & ReactJS

- styled-components

- Axios

- React-Router & React-Context

### At the end of the project, will be able to; 💪

- improve coding skills within HTML & CSS (Styled-Components) & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1: Create React App using `npx create-react-app cookease-app`

- Step 2: Signup `https://developer.edamam.com/edamam-docs-recipe-api` and get api key.

- Step 3 : Use api key and `axios` for getting data from `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`.

- Step 4: Code project with **styled component**

- Step 5: Use Context API for Global State Management

- Step 6: Add project gif to project and README.md file.

## Additional Data 📦

- [Assets Folder](./src/assets/)

## Contributing 🤝

Your insights and contributions greatly enrich my projects! Whether you're bursting with fresh project concepts or have ideas to enhance existing ones, your input is invaluable. Feel free to open an issue to initiate a dialogue about your thoughts, or submit a pull request with your proposed modifications. Every contribution plays a vital role in my growth and improvement, so thank you for being an integral part of my community!

## LICENSE 🪪

This repository is licensed under the GNU General Public License v3.0 License. See the GPL licence file for details. For more information please visit [GNU License](https://www.gnu.org/licenses/gpl-3.0.en.html)

**<p align="center">&#9786; Happy Coding &#9997;</p>**

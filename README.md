# Cookease App ©️

💻 https://cookease-app.netlify.app/

## Description

This single-page react recipe application is a platform where users can find various recipes with detailed information and save their favorites after logging in to the site.

## Outcome

## Project Planning & Management

**Epic User Story:** Retrieve and Store User Information 🎖️

**User Stories:**

1️⃣ **Retrieve User Information:**

- 🥇 (Fetch User Information via Axios) - Send a GET request to the chosen free and open source API using Axios. - Handle the response to extract usable user information. - Display the retrieved user information to the user.
- 🥈 (Manually Input User Information) - Create a user interface (form or input fields) for manual user data input. - Implement validation to ensure correctness and completeness of the entered information. - Save the manually inputted user data for storage.

2️⃣ **Store User Information**

- 🥇 (Display Stored User Information) - Design a user-friendly table or list view to display both fetched and manually inputted user data. - Organize the displayed information in a clear and understandable format.
- 🥈 (Edit User Information) - Develop functionality to allow users to edit stored user data. - Design an intuitive interface for users to make edits to the displayed user information. - Update the database with the edited user data.
- 🥉 (Delete User Information) - Enable users to delete stored user data. - Implement a confirmation mechanism to prevent accidental deletions. - Remove the selected user data from the database upon user confirmation.

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

- Step 1: Create React App using `yarn create react-app recipe-app`or `npx create-react-app recipe-app`

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

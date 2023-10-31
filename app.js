const App = require("./app/app");

require("dotenv").config({ path: "./.env" });

// Initialize a new instance of an application (App) with a specified port, defaulting to 8080 if not provided.
const init = new App({ port: process.env.PORT || 8080 });
// Configure the routes for the application.
// The '/' path is associated with an array of route objects, including addressRoute, depositRoute, stakingRoute, withdrawalRoute, and swapRoute.
init.runApp([
  {
    path: "/",
    object: [
    ],
  },
]);
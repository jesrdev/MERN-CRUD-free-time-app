import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerControllers";

import {
  addNewMovie,
  getMovies,
  getMovieWithID,
  updateMovie,
  deleteMovie,
} from "../controllers/movieControllers";

import {
  addNewBook,
  getBooks,
  getBookWithID,
  updateBook,
  deleteBook,
} from "../controllers/bookControllers";

import {
  addNewPeople,
  getPeoples,
  getPeopleWithID,
  updatePeople,
  deletePeople,
} from "../controllers/peopleControllers";

import {
  addNewPlace,
  getPlaces,
  getPlaceWithID,
  updatePlace,
  deletePlace,
} from "../controllers/placeControllers";

import {
  addNewRecipe,
  getRecipes,
  getRecipeWithID,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeControllers";

import {
  addNewSong,
  getSongs,
  getSongWithID,
  updateSong,
  deleteSong,
} from "../controllers/songControllers";

import {
  addNewGame,
  getGames,
  getGameWithID,
  updateGame,
  deleteGame,
} from "../controllers/gameControllers";

import {
  addNewShow,
  getShows,
  getShowWithID,
  updateShow,
  deleteShow,
} from "../controllers/showControllers";

const routes = (app) => {
  //Players
  app
    .route("/players")
    // GET endpoint
    .get(getPlayers)
    //POST endpoint
    .post(addNewPlayer);

  app
    .route("/players/:PlayerId")
    //Get specific player
    .get(getPlayerWithID)
    //update specific player
    .put(updatePlayer)
    //Delete specific player
    .delete(deletePlayer);

  //Movies
  app
    .route("/movies")
    // GET endpoint
    .get(getMovies)
    //POST endpoint
    .post(addNewMovie);

  app
    .route("/movies/:MovieId")
    //Get specific movie
    .get(getMovieWithID)
    //update specific movie
    .put(updateMovie)
    //Delete specific movie
    .delete(deleteMovie);

  //Books
  app
    .route("/books")
    // GET endpoint
    .get(getBooks)
    //POST endpoint
    .post(addNewBook);

  app
    .route("/books/:BookId")
    //Get specific book
    .get(getBookWithID)
    //update specific book
    .put(updateBook)
    //Delete specific book
    .delete(deleteBook);

  //Peoples
  app
    .route("/peoples")
    // GET endpoint
    .get(getPeoples)
    //POST endpoint
    .post(addNewPeople);

  app
    .route("/peoples/:PeopleId")
    //Get specific people
    .get(getPeopleWithID)
    //update specific people
    .put(updatePeople)
    //Delete specific people
    .delete(deletePeople);

  //Places
  app
    .route("/places")
    // GET endpoint
    .get(getPlaces)
    //POST endpoint
    .post(addNewPlace);

  app
    .route("/places/:PlaceId")
    //Get specific place
    .get(getPlaceWithID)
    //update specific place
    .put(updatePlace)
    //Delete specific place
    .delete(deletePlace);

  //Recipes
  app
    .route("/recipes")
    // GET endpoint
    .get(getRecipes)
    //POST endpoint
    .post(addNewRecipe);

  app
    .route("/recipes/:RecipeId")
    //Get specific recipe
    .get(getRecipeWithID)
    //update specific recipe
    .put(updateRecipe)
    //Delete specific recipe
    .delete(deleteRecipe);

  //Songs
  app
    .route("/songs")
    // GET endpoint
    .get(getSongs)
    //POST endpoint
    .post(addNewSong);

  app
    .route("/songs/:SongId")
    //Get specific song
    .get(getSongWithID)
    //update specific song
    .put(updateSong)
    //Delete specific song
    .delete(deleteSong);

  //Games
  app
    .route("/games")
    // GET endpoint
    .get(getGames)
    //POST endpoint
    .post(addNewGame);

  app
    .route("/games/:GameId")
    //Get specific game
    .get(getGameWithID)
    //update specific game
    .put(updateGame)
    //Delete specific game
    .delete(deleteGame);

  //Shows
  app
    .route("/shows")
    // GET endpoint
    .get(getShows)
    //POST endpoint
    .post(addNewShow);

  app
    .route("/shows/:ShowId")
    //Get specific player
    .get(getShowWithID)
    //update specific player
    .put(updateShow)
    //Delete specific player
    .delete(deleteShow);
};

export default routes;

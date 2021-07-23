import React from "react";
import PlayerList from "./Player/PlayerList";
import MovieList from "./Movie/MovieList";
import BookList from "./Book/BookList";
import GameList from "./Game/GameList";
import PeopleList from "./People/PeopleList";
import PlaceList from "./Place/PlaceList";
import RecipeList from "./Recipe/RecipeList";
import SongList from "./Song/SongList";
import ShowList from "./Show/ShowList";
import PlayerSingle from "./Player/PlayerSingle";
import MovieSingle from "./Movie/MovieSingle";
import BookSingle from "./Book/BookSingle";
import GameSingle from "./Game/GameSingle";
import PeopleSingle from "./People/PeopleSingle";
import PlaceSingle from "./Place/PlaceSingle";
import RecipeSingle from "./Recipe/RecipeSingle";
import SongSingle from "./Song/SongSingle";
import ShowSingle from "./Show/ShowSingle";
import PlayerForm from "./Player/PlayerForm";
import MovieForm from "./Movie/MovieForm";
import BookForm from "./Book/BookForm";
import GameForm from "./Game/GameForm";
import PeopleForm from "./People/PeopleForm";
import PlaceForm from "./Place/PlaceForm";
import RecipeForm from "./Recipe/RecipeForm";
import SongForm from "./Song/SongForm";
import ShowForm from "./Show/ShowForm";
import PlayerModify from "./Player/PlayerModify";
import MovieModify from "./Movie/MovieModify";
import BookModify from "./Book/BookModify";
import GameModify from "./Game/GameModify";
import PeopleModify from "./People/PeopleModify";
import PlaceModify from "./Place/PlaceModify";
import RecipeModify from "./Recipe/RecipeModify";
import SongModify from "./Song/SongModify";
import ShowModify from "./Show/ShowModify";
import MainNav from "./MainNav";
import MainImage from "./Home/MainImage";
import MainList from "./Home/HomeList";
import PlayerNav from "./Player/PlayerNav";
import MovieNav from "./Movie/MovieNav";
import BookNav from "./Book/BookNav";
import GameNav from "./Game/GameNav";
import PeopleNav from "./People/PeopleNav";
import PlaceNav from "./Place/PlaceNav";
import RecipeNav from "./Recipe/RecipeNav";
import SongNav from "./Song/SongNav";
import ShowNav from "./Show/ShowNav";
import axios from "axios";
import { HashRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      movies: [],
      books: [],
      games: [],
      peoples: [],
      places: [],
      recipes: [],
      songs: [],
      shows: [],
      currentPlayer: {},
      currentMovie: {},
      currentBook: {},
      currentGame: {},
      currentPeople: {},
      currentPlace: {},
      currentRecipe: {},
      currentSong: {},
      currentShow: {},
    };

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.updateCurrentMovie = this.updateCurrentMovie.bind(this);
    this.updateCurrentBook = this.updateCurrentBook.bind(this);
    this.updateCurrentGame = this.updateCurrentGame.bind(this);
    this.updateCurrentPeople = this.updateCurrentPeople.bind(this);
    this.updateCurrentPlace = this.updateCurrentPlace.bind(this);
    this.updateCurrentRecipe = this.updateCurrentRecipe.bind(this);
    this.updateCurrentSong = this.updateCurrentSong.bind(this);
    this.updateCurrentShow = this.updateCurrentShow.bind(this);
    this.loadPlayersList = this.loadPlayersList.bind(this);
    this.loadMoviesList = this.loadMoviesList.bind(this);
    this.loadBooksList = this.loadBooksList.bind(this);
    this.loadGamesList = this.loadGamesList.bind(this);
    this.loadPeoplesList = this.loadPeoplesList.bind(this);
    this.loadPlacesList = this.loadPlacesList.bind(this);
    this.loadRecipesList = this.loadRecipesList.bind(this);
    this.loadSongsList = this.loadSongsList.bind(this);
    this.loadShowsList = this.loadShowsList.bind(this);
  }

  loadPlayersList() {
    const url = `https://free-time-options.herokuapp.com/players`;
    axios
      .get(url)
      .then((Response) => {
        this.setState({ players: Response.data }, () => {});
      })
      .catch((error) => {
        console.log(error);
        console.log(process.env.PORT);
      });
  }

  loadMoviesList() {
    const url = `https://free-time-options.herokuapp.com/movies`;
    axios
      .get(url)
      .then((Response) => {
        this.setState({ movies: Response.data }, () => {});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadBooksList() {
    const url = `https://free-time-options.herokuapp.com/books`;
    axios
      .get(url)
      .then((Response) => {
        this.setState({ books: Response.data }, () => {});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadGamesList() {
    const url = `https://free-time-options.herokuapp.com/games`;
    axios
      .get(url)
      .then((Response) => {
        this.setState({ games: Response.data }, () => {});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadPeoplesList() {
    const url = `https://free-time-options.herokuapp.com/peoples`;
    axios
      .get(url)
      .then((Response) => {
        this.setState({ peoples: Response.data }, () => {});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadPlacesList() {
    const url = `https://free-time-options.herokuapp.com/places`;
    axios
      .get(url)
      .then((Response) => {
        this.setState({ places: Response.data }, () => {});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadRecipesList() {
    const url = `https://free-time-options.herokuapp.com/recipes`;
    axios
      .get(url)
      .then((Response) => {
        this.setState({ recipes: Response.data }, () => {});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadSongsList() {
    const url = `https://free-time-options.herokuapp.com/songs`;
    axios
      .get(url)
      .then((Response) => {
        this.setState({ songs: Response.data }, () => {});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  loadShowsList() {
    const url = `https://free-time-options.herokuapp.com/shows`;
    axios
      .get(url)
      .then((Response) => {
        this.setState({ shows: Response.data }, () => {});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadPlayersList();
    this.loadMoviesList();
    this.loadBooksList();
    this.loadGamesList();
    this.loadPeoplesList();
    this.loadPlacesList();
    this.loadRecipesList();
    this.loadSongsList();
    this.loadShowsList();
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }

  updateCurrentMovie(item) {
    this.setState({
      currentMovie: item,
    });
  }

  updateCurrentBook(item) {
    this.setState({
      currentBook: item,
    });
  }

  updateCurrentGame(item) {
    this.setState({
      currentGame: item,
    });
  }

  updateCurrentPeople(item) {
    this.setState({
      currentPeople: item,
    });
  }

  updateCurrentPlace(item) {
    this.setState({
      currentPlace: item,
    });
  }

  updateCurrentRecipe(item) {
    this.setState({
      currentRecipe: item,
    });
  }

  updateCurrentSong(item) {
    this.setState({
      currentSong: item,
    });
  }

  updateCurrentShow(item) {
    this.setState({
      currentShow: item,
    });
  }

  render() {
    return (
      <HashRouter>
        <div className="container-fluid">
          <div className="row mar-b-5">
            <nav>
              <div className="nav-wrapper blue darken-1">
                <a href="/" className="brand-logo">
                  Free Time Options
                </a>
              </div>
            </nav>
          </div>
          <MainNav />
          <div className="row">
            <div className="col s3">
              <Switch>
                <Route exact path="/" component={MainList} />
                <Route
                  path="/movies"
                  render={(props) => (
                    <MovieList
                      movies={this.state.movies}
                      updateCurrentMovie={this.updateCurrentMovie}
                    />
                  )}
                />
                <Route
                  path="/players"
                  render={(props) => (
                    <PlayerList
                      players={this.state.players}
                      updateCurrentPlayer={this.updateCurrentPlayer}
                    />
                  )}
                />
                <Route
                  path="/books"
                  render={(props) => (
                    <BookList
                      books={this.state.books}
                      updateCurrentBook={this.updateCurrentBook}
                    />
                  )}
                />
                <Route
                  path="/games"
                  render={(props) => (
                    <GameList
                      games={this.state.games}
                      updateCurrentGame={this.updateCurrentGame}
                    />
                  )}
                />
                <Route
                  path="/peoples"
                  render={(props) => (
                    <PeopleList
                      peoples={this.state.peoples}
                      updateCurrentPeople={this.updateCurrentPeople}
                    />
                  )}
                />
                <Route
                  path="/places"
                  render={(props) => (
                    <PlaceList
                      places={this.state.places}
                      updateCurrentPlace={this.updateCurrentPlace}
                    />
                  )}
                />
                <Route
                  path="/recipes"
                  render={(props) => (
                    <RecipeList
                      recipes={this.state.recipes}
                      updateCurrentRecipe={this.updateCurrentRecipe}
                    />
                  )}
                />
                <Route
                  path="/songs"
                  render={(props) => (
                    <SongList
                      songs={this.state.songs}
                      updateCurrentSong={this.updateCurrentSong}
                    />
                  )}
                />
                <Route
                  path="/shows"
                  render={(props) => (
                    <ShowList
                      shows={this.state.shows}
                      updateCurrentShow={this.updateCurrentShow}
                    />
                  )}
                />
              </Switch>
            </div>
            <div className="col s9">
              <Switch>
                <Route exact path="/" component={MainImage} />
                <Route
                  path="/movies"
                  render={(props) => (
                    <MovieSingle
                      movie={this.state.currentMovie}
                      loadMoviesList={this.loadMoviesList}
                      updateCurrentMovie={this.updateCurrentMovie}
                    />
                  )}
                />
                <Route
                  path="/players"
                  render={(props) => (
                    <PlayerSingle
                      player={this.state.currentPlayer}
                      loadPlayersList={this.loadPlayersList}
                      updateCurrentPlayer={this.updateCurrentPlayer}
                    />
                  )}
                />
                <Route
                  path="/books"
                  render={(props) => (
                    <BookSingle
                      book={this.state.currentBook}
                      loadBooksList={this.loadBooksList}
                      updateCurrentBook={this.updateCurrentBook}
                    />
                  )}
                />
                <Route
                  path="/games"
                  render={(props) => (
                    <GameSingle
                      game={this.state.currentGame}
                      loadGamesList={this.loadGamesList}
                      updateCurrentGame={this.updateCurrentGame}
                    />
                  )}
                />
                <Route
                  path="/peoples"
                  render={(props) => (
                    <PeopleSingle
                      people={this.state.currentPeople}
                      loadPeoplesList={this.loadPeoplesList}
                      updateCurrentPeople={this.updateCurrentPeople}
                    />
                  )}
                />
                <Route
                  path="/places"
                  render={(props) => (
                    <PlaceSingle
                      place={this.state.currentPlace}
                      loadPlacesList={this.loadPlacesList}
                      updateCurrentPlace={this.updateCurrentPlace}
                    />
                  )}
                />
                <Route
                  path="/recipes"
                  render={(props) => (
                    <RecipeSingle
                      recipe={this.state.currentRecipe}
                      loadRecipesList={this.loadRecipesList}
                      updateCurrentRecipe={this.updateCurrentRecipe}
                    />
                  )}
                />
                <Route
                  path="/songs"
                  render={(props) => (
                    <SongSingle
                      song={this.state.currentSong}
                      loadSongsList={this.loadSongsList}
                      updateCurrentSong={this.updateCurrentSong}
                    />
                  )}
                />
                <Route
                  path="/shows"
                  render={(props) => (
                    <ShowSingle
                      show={this.state.currentShow}
                      loadShowsList={this.loadShowsList}
                      updateCurrentShow={this.updateCurrentShow}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <Switch>
                <Route
                  exact
                  path="/players"
                  render={(props) => (
                    <>
                      <PlayerNav />
                      <PlayerForm loadPlayersList={this.loadPlayersList} />
                    </>
                  )}
                />
                <Route
                  path="/players/modify"
                  render={(props) => (
                    <>
                      <PlayerNav />
                      <PlayerModify
                        player={this.state.currentPlayer}
                        loadPlayersList={this.loadPlayersList}
                        updateCurrentPlayer={this.updateCurrentPlayer}
                      />
                    </>
                  )}
                />
                <Route
                  exact
                  path="/movies"
                  render={(props) => (
                    <>
                      <MovieNav />
                      <MovieForm loadMoviesList={this.loadMoviesList} />
                    </>
                  )}
                />
                <Route
                  path="/movies/modify"
                  render={(props) => (
                    <>
                      <MovieNav />
                      <MovieModify
                        movie={this.state.currentMovie}
                        loadMoviesList={this.loadMoviesList}
                        updateCurrentMovie={this.updateCurrentMovie}
                      />
                    </>
                  )}
                />
                <Route
                  exact
                  path="/books"
                  render={(props) => (
                    <>
                      <BookNav />
                      <BookForm loadBooksList={this.loadBooksList} />
                    </>
                  )}
                />
                <Route
                  path="/books/modify"
                  render={(props) => (
                    <>
                      <BookNav />
                      <BookModify
                        book={this.state.currentBook}
                        loadBooksList={this.loadBooksList}
                        updateCurrentBook={this.updateCurrentBook}
                      />
                    </>
                  )}
                />
                <Route
                  exact
                  path="/games"
                  render={(props) => (
                    <>
                      <GameNav />
                      <GameForm loadGamesList={this.loadGamesList} />
                    </>
                  )}
                />
                <Route
                  path="/games/modify"
                  render={(props) => (
                    <>
                      <GameNav />
                      <GameModify
                        game={this.state.currentGame}
                        loadGamesList={this.loadGamesList}
                        updateCurrentGame={this.updateCurrentGame}
                      />
                    </>
                  )}
                />
                <Route
                  exact
                  path="/peoples"
                  render={(props) => (
                    <>
                      <PeopleNav />
                      <PeopleForm loadPeoplesList={this.loadPeoplesList} />
                    </>
                  )}
                />
                <Route
                  path="/peoples/modify"
                  render={(props) => (
                    <>
                      <PeopleNav />
                      <PeopleModify
                        people={this.state.currentPeople}
                        loadPeoplesList={this.loadPeoplesList}
                        updateCurrentPeople={this.updateCurrentPeople}
                      />
                    </>
                  )}
                />
                <Route
                  exact
                  path="/places"
                  render={(props) => (
                    <>
                      <PlaceNav />
                      <PlaceForm loadPlacesList={this.loadPlacesList} />
                    </>
                  )}
                />
                <Route
                  path="/places/modify"
                  render={(props) => (
                    <>
                      <PlaceNav />
                      <PlaceModify
                        place={this.state.currentPlace}
                        loadPlacesList={this.loadPlacesList}
                        updateCurrentPlace={this.updateCurrentPlace}
                      />
                    </>
                  )}
                />
                <Route
                  exact
                  path="/recipes"
                  render={(props) => (
                    <>
                      <RecipeNav />
                      <RecipeForm loadRecipesList={this.loadRecipesList} />
                    </>
                  )}
                />
                <Route
                  path="/recipes/modify"
                  render={(props) => (
                    <>
                      <RecipeNav />
                      <RecipeModify
                        recipe={this.state.currentRecipe}
                        loadRecipesList={this.loadRecipesList}
                        updateCurrentRecipe={this.updateCurrentRecipe}
                      />
                    </>
                  )}
                />
                <Route
                  exact
                  path="/songs"
                  render={(props) => (
                    <>
                      <SongNav />
                      <SongForm loadSongsList={this.loadSongsList} />
                    </>
                  )}
                />
                <Route
                  path="/songs/modify"
                  render={(props) => (
                    <>
                      <SongNav />
                      <SongModify
                        song={this.state.currentSong}
                        loadSongsList={this.loadSongsList}
                        updateCurrentSong={this.updateCurrentSong}
                      />
                    </>
                  )}
                />
                <Route
                  exact
                  path="/shows"
                  render={(props) => (
                    <>
                      <ShowNav />
                      <ShowForm loadShowsList={this.loadShowsList} />
                    </>
                  )}
                />
                <Route
                  path="/shows/modify"
                  render={(props) => (
                    <>
                      <ShowNav />
                      <ShowModify
                        show={this.state.currentShow}
                        loadShowsList={this.loadShowsList}
                        updateCurrentShow={this.updateCurrentShow}
                      />
                    </>
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

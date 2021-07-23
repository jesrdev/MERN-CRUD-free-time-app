import mongoose from "mongoose";
import { MovieSchema } from "../models/movieModel";

const Movie = mongoose.model("Movie", MovieSchema);

export const addNewMovie = (req, res) => {
  let newMovie = new Movie(req.body);

  newMovie.save((err, Movie) => {
    if (err) {
      res.send(err);
    }
    res.json(Movie);
  });
};

export const getMovies = (req, res) => {
  Movie.find({}, (err, Movie) => {
    if (err) {
      res.send(err);
    }
    res.json(Movie);
  });
};

export const getMovieWithID = (req, res) => {
  Movie.findById(req.params.MovieId, (err, Movie) => {
    if (err) {
      res.send(err);
    }
    res.json(Movie);
  });
};

export const updateMovie = (req, res) => {
  Movie.findOneAndUpdate(
    { _id: req.params.MovieId },
    req.body,
    { new: true },
    (err, Movie) => {
      if (err) {
        res.send(err);
      }
      res.json(Movie);
    }
  );
};

export const deleteMovie = (req, res) => {
  Movie.remove({ _id: req.params.MovieId }, (err, Movie) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted movie" });
  });
};

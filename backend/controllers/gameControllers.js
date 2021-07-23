import mongoose from "mongoose";
import { GameSchema } from "../models/gameModel";

const Game = mongoose.model("Game", GameSchema);

export const addNewGame = (req, res) => {
  let newGame = new Game(req.body);

  newGame.save((err, Game) => {
    if (err) {
      res.send(err);
    }
    res.json(Game);
  });
};

export const getGames = (req, res) => {
  Game.find({}, (err, Game) => {
    if (err) {
      res.send(err);
    }
    res.json(Game);
  });
};

export const getGameWithID = (req, res) => {
  Game.findById(req.params.GameId, (err, Game) => {
    if (err) {
      res.send(err);
    }
    res.json(Game);
  });
};

export const updateGame = (req, res) => {
  Game.findOneAndUpdate(
    { _id: req.params.GameId },
    req.body,
    { new: true },
    (err, Game) => {
      if (err) {
        res.send(err);
      }
      res.json(Game);
    }
  );
};

export const deleteGame = (req, res) => {
  Game.remove({ _id: req.params.GameId }, (err, Game) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted game" });
  });
};

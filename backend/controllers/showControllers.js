import mongoose from "mongoose";
import { ShowSchema } from "../models/showModel";

const Show = mongoose.model("Show", ShowSchema);

export const addNewShow = (req, res) => {
  let newShow = new Show(req.body);

  newShow.save((err, Show) => {
    if (err) {
      res.send(err);
    }
    res.json(Show);
  });
};

export const getShows = (req, res) => {
  Show.find({}, (err, Show) => {
    if (err) {
      res.send(err);
    }
    res.json(Show);
  });
};

export const getShowWithID = (req, res) => {
  Show.findById(req.params.ShowId, (err, Show) => {
    if (err) {
      res.send(err);
    }
    res.json(Show);
  });
};

export const updateShow = (req, res) => {
  Show.findOneAndUpdate(
    { _id: req.params.ShowId },
    req.body,
    { new: true },
    (err, Show) => {
      if (err) {
        res.send(err);
      }
      res.json(Show);
    }
  );
};

export const deleteShow = (req, res) => {
  Show.remove({ _id: req.params.ShowId }, (err, Show) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted show" });
  });
};

import mongoose from "mongoose";
import { PlaceSchema } from "../models/placeModel";

const Place = mongoose.model("Place", PlaceSchema);

export const addNewPlace = (req, res) => {
  let newPlace = new Place(req.body);

  newPlace.save((err, Place) => {
    if (err) {
      res.send(err);
    }
    res.json(Place);
  });
};

export const getPlaces = (req, res) => {
  Place.find({}, (err, Place) => {
    if (err) {
      res.send(err);
    }
    res.json(Place);
  });
};

export const getPlaceWithID = (req, res) => {
  Place.findById(req.params.PlaceId, (err, Place) => {
    if (err) {
      res.send(err);
    }
    res.json(Place);
  });
};

export const updatePlace = (req, res) => {
  Place.findOneAndUpdate(
    { _id: req.params.PlaceId },
    req.body,
    { new: true },
    (err, Place) => {
      if (err) {
        res.send(err);
      }
      res.json(Place);
    }
  );
};

export const deletePlace = (req, res) => {
  Place.remove({ _id: req.params.PlaceId }, (err, Place) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted place" });
  });
};

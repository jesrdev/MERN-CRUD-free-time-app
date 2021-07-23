import mongoose from "mongoose";
import { PeopleSchema } from "../models/peopleModel";

const People = mongoose.model("People", PeopleSchema);

export const addNewPeople = (req, res) => {
  let newPeople = new People(req.body);

  newPeople.save((err, People) => {
    if (err) {
      res.send(err);
    }
    res.json(People);
  });
};

export const getPeoples = (req, res) => {
  People.find({}, (err, People) => {
    if (err) {
      res.send(err);
    }
    res.json(People);
  });
};

export const getPeopleWithID = (req, res) => {
  People.findById(req.params.PeopleId, (err, People) => {
    if (err) {
      res.send(err);
    }
    res.json(People);
  });
};

export const updatePeople = (req, res) => {
  People.findOneAndUpdate(
    { _id: req.params.PeopleId },
    req.body,
    { new: true },
    (err, People) => {
      if (err) {
        res.send(err);
      }
      res.json(People);
    }
  );
};

export const deletePeople = (req, res) => {
  People.remove({ _id: req.params.PeopleId }, (err, People) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted people" });
  });
};

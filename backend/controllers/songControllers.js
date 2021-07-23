import mongoose from "mongoose";
import { SongSchema } from "../models/songModel";

const Song = mongoose.model("Song", SongSchema);

export const addNewSong = (req, res) => {
  let newSong = new Song(req.body);

  newSong.save((err, Song) => {
    if (err) {
      res.send(err);
    }
    res.json(Song);
  });
};

export const getSongs = (req, res) => {
  Song.find({}, (err, Song) => {
    if (err) {
      res.send(err);
    }
    res.json(Song);
  });
};

export const getSongWithID = (req, res) => {
  Song.findById(req.params.SongId, (err, Song) => {
    if (err) {
      res.send(err);
    }
    res.json(Song);
  });
};

export const updateSong = (req, res) => {
  Song.findOneAndUpdate(
    { _id: req.params.SongId },
    req.body,
    { new: true },
    (err, Song) => {
      if (err) {
        res.send(err);
      }
      res.json(Song);
    }
  );
};

export const deleteSong = (req, res) => {
  Song.remove({ _id: req.params.SongId }, (err, Song) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted song" });
  });
};

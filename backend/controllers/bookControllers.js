import mongoose from "mongoose";
import { BookSchema } from "../models/bookModel";

const Book = mongoose.model("Book", BookSchema);

export const addNewBook = (req, res) => {
  let newBook = new Book(req.body);

  newBook.save((err, Book) => {
    if (err) {
      res.send(err);
    }
    res.json(Book);
  });
};

export const getBooks = (req, res) => {
  Book.find({}, (err, Book) => {
    if (err) {
      res.send(err);
    }
    res.json(Book);
  });
};

export const getBookWithID = (req, res) => {
  Book.findById(req.params.BookId, (err, Book) => {
    if (err) {
      res.send(err);
    }
    res.json(Book);
  });
};

export const updateBook = (req, res) => {
  Book.findOneAndUpdate(
    { _id: req.params.BookId },
    req.body,
    { new: true },
    (err, Book) => {
      if (err) {
        res.send(err);
      }
      res.json(Book);
    }
  );
};

export const deleteBook = (req, res) => {
  Book.remove({ _id: req.params.BookId }, (err, Book) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted book" });
  });
};

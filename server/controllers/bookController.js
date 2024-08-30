const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching books.' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the book.' });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { name, price, imagePath } = req.body;
    const newBook = await Book.create({ name, price, imagePath });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the book.' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { name, price, imagePath } = req.body;
    const book = await Book.findByPk(req.params.id);
    if (book) {
      book.name = name;
      book.price = price;
      book.imagePath = imagePath;
      await book.save();
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the book.' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.destroy();
      res.json({ message: 'Book deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Book not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the book.' });
  }
};

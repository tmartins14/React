import React from "react";
import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

const BookShow = ({ book }) => {
  const { deleteBookById } = useContext(BooksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = showEdit ? (
    <BookEdit book={book} onSubmit={handleSubmit} />
  ) : (
    book.title
  );

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book" />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;

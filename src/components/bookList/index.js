import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import BookTable from './../books';
import Pagination from './../pagination';

const BookList = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(localStorage.getItem('currentPage') ? localStorage.getItem('currentPage') : 1);
  const [booksPerPage] = useState(5);
  const [bookFilter, setBookFilter] = useState([]);
  const history = useHistory();
  const path = window.location.pathname;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem('currentPage', pageNumber);
  };

  useEffect(() => {
    const fetchBooks = async () => {
        setLoading(true);

          const params = {
            filters:[{type: "all", values: [bookFilter]}]
          }

          const res = await axios.post(`http://nyx.vima.ekt.gr:3000/api/books`, params);          
      
          setBooks(res.data.books);
          console.log(res.data);
          setLoading(false);
    };

    fetchBooks();

    history.push(`${path}?page=${localStorage.getItem('currentPage') ? localStorage.getItem('currentPage') : currentPage}`);

  }, [currentPage, history, path, bookFilter]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="text-primary mb-3">On Track - pagination test</h1>
        <div class="form-group">
            <label for="filterInput">Search</label>
            <input type="text" class="form-control" id="filterInput" placeholder="Please enter a search term" onChange={e => setBookFilter(e.target.value)} />
        </div>       
        <BookTable books={currentBooks} loading={loading} />
        <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate} />
      </div>
    </div>
  )
}

export default BookList;
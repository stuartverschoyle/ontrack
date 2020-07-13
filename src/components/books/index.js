import React from 'react';
import { Table, Container } from "react-bootstrap";


const Books = ({ books, loading}) => {


   
    if(loading){
        return <h2>Loading...</h2>;
    }



    return (
        <Container>
          <Table striped bordered hover size="lg">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publication City</th>
                <th>Publication Country</th>
                <th>Publication Year</th>
                <th>Pages</th>
              </tr>
            </thead>
            <tbody>
            {books
                .map(book => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.book_title}</td>
                  <td>{book.book_author}</td>
                  <td>{book.book_publication_city}</td>
                  <td>{book.book_publication_country}</td>
                  <td>{book.book_publication_year}</td>
                  <td>{book.book_pages}</td>        
                </tr>
            ))}
            </tbody>
          </Table>
      </Container>
    )
}

export default Books;
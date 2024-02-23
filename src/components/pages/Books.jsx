import React, { useEffect, useState } from 'react';
import './Books.css';
import axios from 'axios';
import NavBar from './NavBar';

// Books component
const Books = () => {
  // State for book data and search term
  const [bookData, setBooksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to get book data from API
  const getData = () => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
      .then((res) => setBooksData(res.data.books))
  };

  useEffect(() => { getData() }, []);

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtering books based on search term
  const filteredBooks = bookData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render books
  return (
    <div className='Books'>
      <NavBar /> {/* Navigation bar component */}
      <input className='search' type="text" placeholder="Search..." onChange={handleSearch} /> {/* Search input */}
      <div className='container'>
        {filteredBooks.map((el, i) => ( // Mapping through filtered books
          <div key={i} className='section'>
            <div className='book-imgs'>
              <img src={el.imageLinks.thumbnail} alt={el.title} /> {/* Book image */}
              <div className='tileName' style={{ fontSize: "15px", width: "65%" }}>
                <h3>{el.title}</h3> {/* Book title */}
                <p>*Free</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting Books component
export default Books;

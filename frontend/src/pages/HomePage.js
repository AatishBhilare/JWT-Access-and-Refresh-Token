import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  let [books, setBooks] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getBooks();
  }, []);

  let getBooks = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/books/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    if (response.status === 200) {
      setBooks(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return (
    <div className="box">
      <br />
      <br />
      <br />
      <br />
      <br />
      {books.map((book) => (             
      <div className="card">
        <div className="container">
          <h4 key={book.id}>{book.name}</h4>
        </div>
      </div>
      ))}
    </div>
  );
};

export default HomePage;

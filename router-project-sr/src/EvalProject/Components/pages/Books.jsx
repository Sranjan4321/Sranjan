import React from "react";
import { useEffect, useState } from "react";

// import { BookCard } from "./BookCard";
import styled from "styled-components";
import { BookCard } from "./BookCard";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      let res = await fetch("http://localhost:8080/books");
      let data = await res.json();
      setData(data);
    };

    getdata();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
        {data.map((elem) => (
          <BookCard elem={elem} />
        ))}
      </Grid>
    </>
  );
};
export default Books;

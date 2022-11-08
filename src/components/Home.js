import React from "react";
import data from "../data.json";
import { useState, useEffect } from "react";

function Home(props) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [price, setPrice] = useState("50");

  useEffect(() => {
    const searchedObjects = data.eBooks.filter((book) => {
      return book.language.toLowerCase().includes(search.toLowerCase());
    });
    setResults(searchedObjects);
  }, [search]);
  useEffect(() => {
    const searchedObjects = data.eBooks.filter((book) => {
      return book.price < price;
    });
    setResults(searchedObjects);
  }, [price]);
  return (
    <>
      {console.log(data.eBooks)}

      <label>Search </label>
      <input
        className="rounded mt-5"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      <label for="customRange1" class="form-label">
        Price range
      </label>
      <input
        type="range"
        min={10}
        max={50}
        class="form-range-thumb-width-25"
        id="customRange1"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <div className="d-flex justify-content-xxl-around">
        {results.map((book) => (
          <div className="p-2 highlight border border-secondary ml-2">
            <div className=" p-4 w-25">
              <h5 className="text-primary dark:text-white font-medium text-sm">
                {book.language}
              </h5>
              <small className="text-xs font-light text-primary dark:text-gray-400">
                {book.edition}
              </small>
              <h5 className="text-primary dark:text-white font-medium text-sm">
                {book.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;

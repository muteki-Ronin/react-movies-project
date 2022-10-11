import React, { useState } from "react";

function Search({ searchMovies = Function.prototype }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(search, type);
  };

  const handleType = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field">
            <i className="material-icons prefix">search</i>
            <input
              id="icon_prefix"
              type="search"
              className="validate"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <label htmlFor="icon_prefix">Search...</label>
            <button className="btn btn_search light-blue lighten-1">
              Search
            </button>
            <div>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="all"
                  onChange={handleType}
                  checked={type === "all"}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  onChange={handleType}
                  checked={type === "movie"}
                />
                <span>Movies</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  onChange={handleType}
                  checked={type === "series"}
                />
                <span>Series</span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;

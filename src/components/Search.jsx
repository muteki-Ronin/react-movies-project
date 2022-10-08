import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchMovies(this.state.search, this.state.type);
  };

  handleType = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => this.props.searchMovies(this.state.search, this.state.type)
    );
  };

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field">
              <i className="material-icons prefix">search</i>
              <input
                id="icon_prefix"
                type="search"
                className="validate"
                value={this.state.search}
                onChange={(event) =>
                  this.setState({ search: event.target.value })
                }
              />
              <label htmlFor="icon_prefix">Search...</label>
              <button className="btn btn_search">Search</button>
              <div>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    type="radio"
                    data-type="all"
                    onChange={this.handleType}
                    checked={this.state.type === "all"}
                  />
                  <span>All</span>
                </label>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    type="radio"
                    data-type="movie"
                    onChange={this.handleType}
                    checked={this.state.type === "movie"}
                  />
                  <span>Movies</span>
                </label>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    type="radio"
                    data-type="series"
                    onChange={this.handleType}
                    checked={this.state.type === "series"}
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
}

export default Search;

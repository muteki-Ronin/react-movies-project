import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchMovies(this.state.search)
  }

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
                onChange={(event) => this.setState({ search: event.target.value })}
              />
              <label htmlFor="icon_prefix">Search...</label>
              <button className='btn btn_search' >Search</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Search;
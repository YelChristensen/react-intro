
import React from "react";
import ImageDisplay from "./ImageDisplay";

class ImageSearch extends React.Component {
  constructor() {
    super();

    this.state = { searchTerm: "", photoArr: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${
        this.state.searchTerm
      }&client_id=baf3b55611534900b340b2447b2aa759ad2c17be828594a5f018f4eb2ad9d656`
    )
      .then(response => response.json())
      .then(body => {this.setState({ photoArr: body.results, searchTerm: "" });

    });
      
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.searchTerm} />
          <button>Search</button>
        </form>
        {this.state.photoArr.map(photo=><ImageDisplay key={photo.id} source={photo.urls.small} description={photo.description}/>)}
      </div>
    );
  }
}

export default ImageSearch;
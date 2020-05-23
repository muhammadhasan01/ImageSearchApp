import React, { Component } from "react";
import ImageSearch from "./ImageSearch/ImageSearch"
import ImageList from "./ImageList/ImageList";

const API_KEY = "16679201-ca302ee52c656248dd1e01e01";

class App extends Component {
  state = {
    images: [],
    error: null
  };

  handleGetRequest = async (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.searchValue.value;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`;
    const request = await fetch(url);
    const response = await request.json();
    if (searchTerm) {
      this.setState({ images: response.hits, error: null });
    } else {
      this.setState({ error: "Please provide a value." });
    }
  };

  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest} />
        {
          this.state.error === null ? <ImageList images={this.state.images} /> :
          <div style={{color:"#fff", textAlign:"center"}}>{this.state.error}</div>
        }
        
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import axios from 'axios';
import ImageList from './ImageList';

class App extends Component {
  state = { images: [] };

  getPhotos = async () => {
    const response = await axios.get("https://api.unsplash.com/photos", {
      headers: {
        Authorization: "Client-ID 6cc5941746160daccab2b9f7c0ca2344277f1cb808d62ec54a9e13d5286fb18a"
      }
    });
    
    this.setState({ images: response.data});
  }

  render() {
    return(
      <div className="ui container" style={{marginTop: 20}}>
        <h2 className="ui center aligned icon header">
          <i className="circular camera retro icon"></i>
          <button 
            onClick={this.getPhotos}
            className="ui positive basic button"
          >
            get photos
          </button>
        </h2>
        <ImageList  images={this.state.images} />
      </div>
    );
  }
}

export default App;
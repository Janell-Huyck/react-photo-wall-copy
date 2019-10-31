import React, { Component } from "react";
import "./App.css";

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = photoId => `https://picsum.photos/id/${photoId}/200/200`;
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {
  state = {
    photos: []
  };
  componentDidMount() {
    fetch(PHOTO_LIST_URL)
      .then(res => res.json())
      .then(photos => {
        this.setState({ photos });
      });
  }

  render() {
    const { photos = [] } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1>Photo Wall</h1>
        </header>
        <div className="collage">
          {/* We use map here because Array.prototype.map is an expression,
           * and for loops are not. You'll learn more about this soon!
           */}
          {photos.map(photo => (
            <img
              alt={photo.filename}
              key={photo.id}
              src={PHOTO_URL(photo.id)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;

import React from "react";

class ImageDisplay extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.description}</h2>
        <img src={this.props.source} />
      </React.Fragment>
    );
  }
}

export default ImageDisplay;
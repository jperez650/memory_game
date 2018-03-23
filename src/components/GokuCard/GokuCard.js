import React from "react";
import "./GokuCard.css";

class GokuCard extends React.Component {

  render () {

    return (
      <div className="card" onClick={() => {
        this.props.handleClick(this.props.index)
      }}>
        <div className="img-container">
          <img src={this.props.image} />
        </div>
      </div>
      );
  }
}

export default GokuCard;
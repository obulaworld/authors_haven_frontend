// react libraries
import React, { Component } from 'react'

// third party libraries
import RadialProgress from '../radialProgress/RadialProgress';
import Rating from 'react-rating';

class Reaction extends Component {
  state = {
    progress: 93,
    showRating: false
  };

  handleShowRating = (event) => {
    event.preventDefault();
    this.setState({
      showRating: !this.state.showRating
    });
  }

  handleRating = (rate) => {
    const currentProgress = rate * 20;

    this.setState({
      progress: currentProgress
    });
  }
  render() {
    const {
      progress,
      showRating
    } = this.state;

    return (
      <div className="col-md-12 text-center">
        <div className="l-ah-reaction d-flex justify-content-center align-items-center">
          <div 
            className="l-ah-reaction-icon-wrap"
          >
            <span 
              className="l-ah-reaction-icon d-flex justify-content-center align-items-center"
              onClick={this.handleShowRating}
            >
              <RadialProgress strokeColor="#0FC86F" strokeWidth={ 8 } width={ 65 } progress={ progress } />
              <p className="rate">{progress / 20}</p>
            </span>
            <p>Rating</p>
            {
              showRating 
                && (<Rating
                  placeholderRating={progress / 20}
                  emptySymbol="far fa-star fa-1x"
                  fullSymbol="fas fa-star fa-1x"
                  placeholderSymbol={<i className="fas fa-star fa-1x"></i>}
                  fractions={2}
                  className="l-ah-rating"
                  onChange={this.handleRating}
                />)
            }
          </div>
          <div className="l-ah-reaction-icon-wrap">
            <span className="l-ah-reaction-icon d-flex justify-content-center align-items-center">
              <i className="fas fa-thumbs-up scale-icon"></i>
              <div className="reaction-counter">123</div>
            </span>
            <p>Like</p>
          </div>
          <div className="l-ah-reaction-icon-wrap">
            <span className="l-ah-reaction-icon d-flex justify-content-center align-items-center">
              <i className="fas fa-thumbs-down scale-icon"></i>
              <div className="reaction-counter">123</div>
            </span>
            <p>Dislike</p>
          </div>
          <div className="l-ah-reaction-icon-wrap">
            <span className="l-ah-reaction-icon d-flex justify-content-center align-items-center scale-icon">
              <i className="fas fa-bookmark"></i>
            </span>
            <p>Bookmark</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Reaction;

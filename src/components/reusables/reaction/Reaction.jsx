// react libraries
import React, { Component } from 'react';

// third-party libraries
import propTypes from 'prop-types';

// component
import RatingArticle from './Rating';

/**
 * @class Reaction
 * @extends {Component}
 * @description reaction
 */
class Reaction extends Component {
  state = {
    showRating: false,
    likes: 0,
    dislikes: 0
  };

  /**
   * @param {object} event
   * @memberof Reaction
   */
  handleShowRating = (event) => {
    event.preventDefault();
    this.setState({
      showRating: !this.state.showRating
    });
  }

  /**
   *
   * @param {object} newRating
   * @memberof Reaction
   */
  handleRating = (newRating) => {
    const data = { rating: newRating };
    const { slug, rate } = this.props;
    rate(slug, data);
  }

  render() {
    const {
      showRating
    } = this.state;
    const { rating } = this.props;
    return (
      <div className="col-md-12 text-center">
        <div className="l-ah-reaction d-flex justify-content-center align-items-center">
          < RatingArticle
            progress={rating ? rating * 20 : 0}
            handleRating={this.handleRating}
            showRating={showRating}
            handleShowRating={this.handleShowRating} />

          <div className="l-ah-reaction-icon-wrap">
            <span className="l-ah-reaction-icon d-flex justify-content-center align-items-center">
              <i className="fas fa-thumbs-up scale-icon" ></i>
              <div className="reaction-counter"></div>
            </span>
            <p>Like</p>
          </div>
          <div className="l-ah-reaction-icon-wrap">
            <span className="l-ah-reaction-icon d-flex justify-content-center align-items-center">
              <i className="fas fa-thumbs-down scale-icon" ></i>
              <div className="reaction-counter"></div>
            </span>
            <p>Dislike</p>
          </div>
          <div className="l-ah-reaction-icon-wrap">
            <span className="l-ah-reaction-icon d-flex justify-content-center align-items-center scale-icon">
              <i className="fas fa-bookmark" ></i>
            </span>
            <p>Bookmark</p>
          </div>
        </div>
      </div>
    );
  }
}

Reaction.propTypes = {
  slug: propTypes.string,
  rating: propTypes.number,
  rate: propTypes.func,
};
export default Reaction;

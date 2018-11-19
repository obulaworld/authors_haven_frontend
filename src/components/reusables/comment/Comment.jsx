import React, { Component } from 'react'
import Editable from 'react-contenteditable';

export default class Comment extends Component {
    render() {
      const {
        showEditor,
        onClick,
        editorFocus
      } = this.props;
    return (
      <div className="l-ah-comment">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="comment">
                <div className="user-thumbnail d-flex align-items-center">
                  <div className="thumbnail"></div>
                  <div className="user-full-name">
                    <p>Nwaiwu Chigoziem</p>
                    <p>@Mindsworth</p>
                  </div>
                  <div className="comment-count">
                    <p><span>236</span><i className="fas fa-comment"></i>comments</p>
                  </div>
                </div>
                <p 
                  className="comment-text"
                  onClick= { onClick }
                >Comment here ...</p>
                <div className="comment-input">
                {
                  showEditor 
                    && <Editable
                    className="editable"
                    html=" "
                    ref={editorFocus}
                  />
                }
                </div>
              </div>
            </div>

            <div className="col-md-8 offset-md-2">
              <div className="comment-log">
                <div className="user-thumbnail d-flex align-items-center">
                  <div className="thumbnail"></div>
                  <div className="user-full-name">
                    <p>Nwaiwu Chigoziem</p>
                    <p>@Mindsworth</p>
                  </div>
                </div>
                <div className="comment-body">
                  <p>
                    Thanks for your response John J Masse and you are absolutely right but this is not an issue 
                    with just the constructor concept but rather modern JavaScript as a whole. When someone who 
                    does not know modern JavaScript dives into React they will be confused about what is React and 
                    what is modern JavaScript. Classes, binding, arrow functions, scopes, destructuring, 
                    spread/rest, and even simple templates! So many people taking my courses cannot tell the 
                    difference between ` and ‘.
                  </p>
                  <div className="comment-reaction">
                    <p><span>236</span><i className="far fa-thumbs-up"></i></p>
                    <p><span>236</span><i className="far fa-thumbs-down"></i></p>
                  </div>
                </div>
              </div>

              <div className="comment-log">
                <div className="user-thumbnail d-flex align-items-center">
                  <div className="thumbnail"></div>
                  <div className="user-full-name">
                    <p>Nwaiwu Chigoziem</p>
                    <p>@Mindsworth</p>
                  </div>
                </div>
                <div className="comment-body">
                  <p>
                    Thanks for your response John J Masse and you are absolutely right but this is not an issue 
                    with just the constructor concept but rather modern JavaScript as a whole. When someone who 
                    does not know modern JavaScript dives into React they will be confused about what is React and 
                  </p>
                  <div className="comment-reaction">
                    <p><span>236</span><i className="far fa-thumbs-up"></i></p>
                    <p><span>236</span><i className="far fa-thumbs-down"></i></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

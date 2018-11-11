// react libraries
import React, { Fragment, Component } from 'react';

// third-party libraries
import propTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';
import Editor from 'react-medium-editor';
// styles

// modules
import articleValidation from '../../helpers/validation/articleValidation';
import Header from '../reusables/header/Header';
import SearchTag from '../tag/SearchTag';
import Button from '../reusables/button/Button';
/**
 * @class CreateArticle
 * @extends {Component}
 * @param {object} event
 */
class CreateArticlePage extends Component {
  state = {
    article: {
      title: '',
      body: '',
      imageUrl: null,
      description: ''
    },
    sidebarActive: false,
    displayImage: null,
    articleError: {
      title: '',
      description: '',
      body: ''
    }
  };

  handleTitleOnChange = (event) => {
    const { article } = this.state;
    const data = { ...article, title: event.target.value };
    this.setState({
      article: data
    });
  }

  fileSelectedHandler = (event) => {
    const { article } = this.state;
    const displayImage = URL.createObjectURL(event.target.files[0]);
    const data = { ...article, imageUrl: event.target.files[0] };
    this.setState({
      article: data,
      displayImage
    });
  }

  handleChange = (event) => {
    const { article } = this.state;
    const data = { ...article, description: event.target.value };
    this.setState({
      article: data
    });
  }

  handleEditorChange = (body) => {
    const { article } = this.state;
    const data = { ...article, body };
    this.setState({
      article: data
    });
  }

  handleActiveSidebar = (event) => {
    event.preventDefault();
    this.setState({
      sidebarActive: !this.state.sidebarActive
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      imageUrl,
      title,
      body,
      description,
    } = this.state.article;
    const formData = new FormData();
    formData.append('image', imageUrl);
    formData.append('description', description);
    formData.append('title', title);
    formData.append('body', body);
    this.props.createNewArticle(formData);
  };

  render() {
    return (
      <Fragment>
      <div className="l-ah-create-article">
        <Header />
        <Button type="publish-ready-btn" text="Ready to publish?" onClick={this.handleActiveSidebar} />
        <section className="create-article-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form action="" className="create-article-form">
                  <ContentEditable
                    html={this.state.article.title || ''}
                    name="title"
                    className="article-title"
                    onChange={this.handleTitleOnChange}
                  />
                  <div className="form-body-wrap">
                    <label htmlFor="image">Add a featured image <i className="fas fa-images"></i></label>
                    <input type="file" id="image" name="image" className="form-body" aria-describedby="helpId" onChange={this.fileSelectedHandler}/>
                  </div>
                  <div>
                    <img className="img-fluid" src={this.state.displayImage} />
                  </div>
                  <div className="article-editor-wrap">
                  <Editor
                    text={this.state.article.body}
                    value={this.state.article.body}
                    onChange={this.handleEditorChange}
                    options={
                      {
                        toolbar:
                        {
                          allowMultiParagraphSelection: true,
                          buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'underline',
                            'strikethrough', 'justifyLeft',
                            'justifyCenter',
                            'justifyRight',
                          ],
                          diffLeft: 0,
                          diffTop: -10,
                          firstButtonClass: 'medium-editor-button-first',
                          lastButtonClass: 'medium-editor-button-last',
                          relativeContainer: null,
                          standardizeSelectionStart: false,
                          static: false,
                          align: 'center',
                          sticky: false,
                          updateOnEmptySelection: false
                        },
                        placeholder: {
                          text: 'Pen your imagination',
                          hideOnClick: true
                        }
                      }
                    }
                    className="article-editor"
                  />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div
          className={ `l-ah-article-sidebar ${this.state.sidebarActive && ' active'}` }
        >
          <div className="sidebar-inner">
            <i
              className="fas sidebar-close fa-times-circle"
              aria-hidden="true"
              onClick={this.handleActiveSidebar}
            ></i>
            <div className="sidebar-desc">
              <p>Description</p>
              <textarea
                type="text"
                onChange= { this.handleChange }
                name="description"
                placeholder="Type here..."
                value={this.state.article.description}
              />
            </div>
            <p>Tags will help readers to know what your story is about. Add or Change Tags(max 5)</p>
            <SearchTag />
            <div className="cta-btn">
              <Button type="publish-btn" text="Publish" onClick={this.handleSubmit}/>
              <Button type="discard-btn" text="Discard" />
              {/* <button className="discard-btn btn">Discard</button> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    );
  }
}
CreateArticlePage.propTypes = {
  createNewArticle: propTypes.func,
};
export default CreateArticlePage;

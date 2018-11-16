// react libraries
import React, { Fragment } from 'react';

// components
import FeatureImage from '../reusables/article/FeatureImage';
import ArticleDetails from '../reusables/article/ArticleDetails';
import ArticleContent from '../reusables/article/ArticleContent';
import Article from '../reusables/article/Article';

// fixture
import dummyArticle from './Articles/fixture/dumyArticle';

/**
 * @desc renders Carousel item
 * @return popular article on landing page
*/
const PouplarArticle = () => (
  <Fragment>
    <div className="container-fluid">
        <div className="row  d-flex">
            <div className="l-ah-title col-12 text-center">
              <h2>Popular on Author&apos;s Haven</h2>
            </div>
            <div className="col-md-8">
              <div className="l-ah-bg-card">
                <Article>
                    <FeatureImage
                      src="/images/heroblog.png"
                      className="img-fluid"
                      alt=""
                    />
                    <ArticleContent
                      titleElement={<h2>Welcome</h2>}
                      bodyElement={dummyArticle.editorsPick}
                    />
                    <ArticleDetails
                    type="details"
                      readTime="5min read"
                      publishedDate="5 Nov"
                      authorThumbnail=""
                      authorUsername="Mindsworth"
                    />
                </Article>
              </div>
            </div>
          <div className="col-md-4">
            <div className="l-ah-sm-card-wrap">
            {dummyArticle.getListArticle(
              dummyArticle.recentTitle,
              dummyArticle.recentBody,
              dummyArticle.recentImage,
              3
            )}
            </div>
          </div>
        </div>
      </div>
  </Fragment>
);

export default PouplarArticle;

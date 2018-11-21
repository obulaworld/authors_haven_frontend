// react libraries
import React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';

// components
import FeatureImage from '../reusables/article/FeatureImage';
import ArticleDetails from '../reusables/article/ArticleDetails';
import ArticleContent from '../reusables/article/ArticleContent';
import Article from '../reusables/article/Article';

// fixture
import dummyArticle from './Articles/fixture/dumyArticle';

/**
 * @desc renders the hero section component
 * @return component HeroSection
*/

const HeroBlog = () => (
  <div className="l-ah-hero-blog">
        <div className=" l-ah-hero-blog-inner">
          <Article>
            <FeatureImage
              src="/images/heroblog.png"
              className="img-fluid"
              alt=""
            />
            <figcaption>
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
            </figcaption>
          </Article>
    </div>
  </div>
);

export default HeroBlog;

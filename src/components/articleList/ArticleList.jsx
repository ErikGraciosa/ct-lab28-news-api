import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article/Article';

const ArticleList = ({ articles }) => (
  <>   
    <h2>Search Results Below</h2>
    <hr></hr>
    <div data-testid="articles">
      {articles.map(article => {
        return (
          <>
            <Article 
              key={`${article.author}${article.publishedAt}`}
              title={article.title}
              author={article.author}
              description={article.description} />
            <hr></hr>
          </>
        );
      })}
    </div>
  </>
);

ArticleList.propTypes = {
  articles: PropTypes.array
};

export default ArticleList;

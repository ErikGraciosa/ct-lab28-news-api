import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article/Article';

const ArticleList = ({ articles }) => (
  <>   
    <ul> Here are the Articles
      <Article></Article>
      <Article></Article>
      <Article></Article>
    </ul>
    {articles.map(article => {
      return (
        <Article 
          key={`${article.author}${article.publishedAt}`}
          title={article.title}
          author={article.author}
          description={article.description} />
      );
    })}
  </>
);

ArticleList.propTypes = {
  articles: PropTypes.array
};

export default ArticleList;

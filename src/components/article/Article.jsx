import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => {
  return (
    <div>
      <p><b>Article Title:</b> {title}</p>
      <p><b>Author:</b> {author}</p>
      <p><b>Description:</b> {description}</p>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string
};

export default Article;

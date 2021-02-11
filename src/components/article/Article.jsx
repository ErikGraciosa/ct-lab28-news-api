import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <p>{description}</p>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string
};

export default Article;

import React, { Component } from 'react';
import Search from '../../components/search/Search';
import ArticleList from '../../components/articleList/ArticleList';

export default class NewsSearch extends Component {
  render() {
    return (   
      <> 
        <Search />
        <ArticleList />
      </>
    );
  }
}

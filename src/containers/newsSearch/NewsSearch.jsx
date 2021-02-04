import React, { Component } from 'react';
import Search from '../../components/search/Search';
import ArticleList from '../../components/articleList/ArticleList';
import LoadingSpinner from '../../components/app/loadingSpinner/Spinner';

export default class NewsSearch extends Component {
  state = {
    search: '',
    loading: false,
    articles: []
  }
  render() {
    return (   
      <> 
        <Search />
        <ArticleList />
        <LoadingSpinner />
      </>
    );
  }
}

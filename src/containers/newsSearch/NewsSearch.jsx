import React, { Component } from 'react';
import Search from '../../components/search/Search';
import ArticleList from '../../components/articleList/ArticleList';
import LoadingSpinner from '../../components/app/loadingSpinner/Spinner';

export default class NewsSearch extends Component {
  state = {
    search: 'dogs',
    loading: false,
    articles: []
  }

  componentDidMount = async () => {
    const articles = await fetch(`https://newsapi.org/v2/everything?q=${this.state.search}&apiKey=e30bf2369aec4d03987a662e3c476593`)
      .then(res => res.json())
      .then(json => json.articles);
    console.log(articles)
  }


  render() {
    console.log(this.state)
    return (   
      <> 
        <Search />
        <ArticleList />
        <LoadingSpinner />
      </>
    );
  }
}

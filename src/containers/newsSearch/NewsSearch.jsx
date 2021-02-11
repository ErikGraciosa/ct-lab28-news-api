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

  componentDidMount = () => {
    this.fetchArticles();
  }

  fetchArticles = async() => {
    const URL = 'https://newsapi.org/v2/everything';
    const KEY = 'apiKey=e30bf2369aec4d03987a662e3c476593';

    if(this.state.search != ''){
      this.setState({
        loading: true
      });

      const articles = await fetch(`${URL}?q=${this.state.search}&${KEY}`)
        .then(res => res.json())
        .then(json => json.articles);
      
      this.setState({
        loading: false,
        articles
      });
    }
  }

  onChange = (e) => {
    this.setState({ search: e.target.value }, () => {
      this.fetchArticles();
    });
  }

  render() {
    const { search, loading, articles } = this.state;
    return (   
      <> 
        <Search search={search} onChange={this.onChange}/>
        {loading ? <LoadingSpinner /> : <ArticleList articles={articles}/>}
      </>
    );
  }
}

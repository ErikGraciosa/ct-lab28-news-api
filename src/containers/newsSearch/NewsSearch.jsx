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
    this.setState({
      loading: true
    })
    const articles = await fetch(`https://newsapi.org/v2/everything?q=${this.state.search}&apiKey=e30bf2369aec4d03987a662e3c476593`)
      .then(res => res.json())
      .then(json => json.articles);
    console.log(articles)
    this.setState({
      loading: false,
      articles: articles
    }) 
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    console.log(this.state)
    
    const { search, loading, articles } = this.state

    console.log(articles[0])
    return (   
      <> 
        <Search />
        {loading ? <LoadingSpinner /> :<ArticleList />}
        {articles.map(article => {
        return (
          <>
            <a href="">{article.title}</a>
            <br/>
          </>
        )
        }
        )}
      </>
    );
  }
}

import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

constructor(){
super()
this.state = {
articles:[],
loading:false,
page:1}
}
async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e5a1cd408f8948c79b50b900baccb545&page=1&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(data);
      this.setState({articles:parseData.articles,totalResults: parseData.totalResults})
}
handlePre = async () =>{
    console.log("Pre")
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e5a1cd408f8948c79b50b900baccb545&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(data);
      this.setState({
      page: this.state.page - 1,
      articles:parseData.articles
  })

}
handleNext =async () =>{
  console.log("Next")
  
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e5a1cd408f8948c79b50b900baccb545&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(data);
      this.setState({
    page: this.state.page + 1,
    articles:parseData.articles
  })
}
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
         return <div className='col-md-4' key={element.url}>
        <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
        })}
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-primary" onClick={this.handlePre}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
        </div>
        </div>
      </div>
    )
  }
}

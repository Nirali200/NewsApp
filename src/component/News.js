import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

constructor(){
super()
this.state = {
articles:[],
loading:true}
}
async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e5a1cd408f8948c79b50b900baccb545";
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(data);
      this.setState({articles:parseData.articles})
}

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
         return <div className='col-md-4' key={element.url}>
        <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
        
        </div>
      </div>
    )
  }
}

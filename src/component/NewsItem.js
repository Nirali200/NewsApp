import React, { Component } from 'react'

export default class NewsItem extends Component {

 
  render() {
    let{title, description,imageUrl,newsUrl,author,date} = this.props
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://c.ndtvimg.com/2023-08/5g4569so_russia-moon-mission-luna25-afp_625x300_11_August_23.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {date}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>  
</div>
    )
  }
}

import React, { Component } from 'react'

export default class NewsItem extends Component {

  articles = [
       [{"source":{"id":"four-four-two","name":"FourFourTwo"},"author":"Richard Laverty","title":"Why is Nottingham Forest vs Sheffield United not on TV?","description":"Nottingham Forest vs Sheffield United is not on TV – and it's all because of… cricket!?","url":"https://www.fourfourtwo.com/news/why-is-nottingham-forest-vs-sheffield-united-not-on-tv","urlToImage":"https://cdn.mos.cms.futurecdn.net/NFrj5JKt8nn8NgQBNQunqb-1200-80.jpg","publishedAt":"2023-08-18T12:00:15Z","content":"Nottingham Forest vs Sheffield United is not on TV tonight – due to the cricket.\r\nThe first Friday night football of the Premier League season beckons when Forest host the newly-promoted Blades ahead… [+2591 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com","description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}]
  ]

constructor(){
  super();
  console.log("Hello I m a constructer from NewsItem")
  this.state = {articles:this.articles,
  loading:false}
}

  render() {
    let{title, description,imageUrl} = this.props
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/newsitem" className="btn btn-sm btn-primary"> Read More</a>
  </div>
</div>
      </div>
    )
  }
}

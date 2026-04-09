import React, { Component } from 'react'
import NewsItem from './Newsitem';

export class News extends Component {
   
    constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1622232fbfe3481594290e38b1f5a107&page=1&pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});


    }
    handlePrevClick = async()=>{
         let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1622232fbfe3481594290e38b1f5a107&page=${this.state.page - 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      
      this.setState({page: this.state.page - 1,
        articles: parsedData.articles
        


      })

    }


    handleNextClick =  async()=>{
      if(this.state.page < Math.ceil(this.state.totalResults / 20)) {
        
      }
      else{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1622232fbfe3481594290e38b1f5a107&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        
        this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
        


      })}
    }

    render() {
        return (
            <div className="container my-3">
                <h1>SuryaNews - Top Headlines</h1>
              
                <div className="row"> 
                    {this.state.articles.map((element)=>{
                   return  <div className="col-md-4"key={element.url}>
                        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} url={element.url}/>
                    </div>
                    })}   
                </div> 
                <div className="container d-flex justify-content-between">
                  <button disabled={this.state.page<=1}type="button" className="btn btn-dark"onclick={this.handlePrevClick}> &larr; Previous</button>
                  <button type="button" className="btn btn-dark" onclick={this.handleNextClick}>Next &rarr;</button>
                  </div>
            </div>
        )
    }
}

export default News
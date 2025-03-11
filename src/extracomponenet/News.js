import React, { Component } from 'react'
import Newcard from './Newcard'
import Spinner from './Spinner'
import './News.css'
import InfiniteScroll from "react-infinite-scroll-component"; {/*for i9nfinite scroll we are using library react-infinite-scroll-component so install it*/}

export  class News extends Component {

  constructor(props){
    super(props); // to use constructor in react firdt we want to use supere kayword
    console.log('hello i am constructor from  news constructor')
    // these works like usestate
    this.state={
      articles:[] , // we store the feact data in articles
      loading:false,
      page:1,
      totalResults:0
    }
    document.title=`${this.props.category} - NewsWala `;
  }


  // it will run after render it is inbild function
   
  // in componentDidMount we write logic of feating data
  async componentDidMount(){
    this.props.setProgress(10);
    console.log("componentDidMount");
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c52ab34a8284d87b7940dc5def0e336&page=1&pagesize=${this.props.pageSize || 6}`; // pagesize is this.props.pageSize mean it will fetch this.props.pageSize news in 1 page
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsdata= await data.json();
    this.props.setProgress(90);
    console.log(parsdata);
    this.setState({articles:parsdata.articles , // now we udate the state variable article which is empty by using setstate now data was feacted in article  variable
        totalResults:parsdata.totalResults,
        loading:false
      })
      this.props.setProgress(100);
  }

    fetchMoreData = async()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c52ab34a8284d87b7940dc5def0e336&page=${this.state.page +1}&pagesize=${this.props.pageSize || 6}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsdata= await data.json();
    console.log(parsdata);
    this.setState({articles:this.state.articles.concat(parsdata.articles) ,
        totalResults:parsdata.totalResults,
        page:this.state.page +1,
        loading:false
      })
  }

  render() {
    return (
      <div className={`container`}>
      <h2 className={`text-center`} > Top {this.props.category} headlines</h2>
       {/* {this.state.loading && <Spinner/>}if loading is true then run spinner */}
      <InfiniteScroll
        dataLength={this.state.articles.length} 
        next={this.fetchMoreData}
        hasMore={this.state.articles.length!==this.state.totalResults}
        loader={this.state.loading && <Spinner/>}
      >
        <div className={` grid`}> 
        {/* change doen line for infinite scroll */}
        {this.state.articles.map ((element)=>{  // this.state.article contain fetch data
          return <div  key={element.url}> {/*to passing usr we nwwd to give key */}
          <Newcard author={!element.author?"unkown":element.author} date={!element.publishedAt?"":element.publishedAt} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url}/>  {/*we pass the props*/}
          </div>
        })}
        </div>
      </InfiniteScroll>
    </div>
    )
  }
}

export default News;

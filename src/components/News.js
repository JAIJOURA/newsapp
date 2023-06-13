import React,{useState,useEffect}  from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
  import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {
const [articles, setarticles] = useState([])
const [loading, setloading] = useState(false)
const [page, setpage] = useState(1)
const [totalResults, settotalResults] = useState(0)
  
        // document.title= `KonnichaNews - ${(props.category).charAt(0).toUpperCase()+(props.category).slice(1)}`;
  
   const componentDidMount = async()=>{
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}&page=1`
    setloading(true)
    
    let data = await fetch(url)
    props.setProgress(50);
    let parseData = await data.json()
   props.setProgress(75);
   setarticles(parseData.articles)
   settotalResults(parseData.totalResults)
   setloading(false)
    
  props.setProgress(100);
   }
   useEffect(()=>{
    componentDidMount()
    // eslint-disable-next-line
   },[])
   
//    handlePrevClick = async()=>{
    
//       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cbda991ab4c5455b909e1cb546250d08&pageSize=${props.pageSize}&page=${this.state.page - 1}`
//     this.setState({loading:true})
//       let data = await fetch(url)
//     let parseData = await data.json()
//     this.setState({
//         page:this.state.page-1,
//         articles:parseData.articles,
//         loading:false
//     })
//    }
//    handleNextClick =async ()=>{
// if(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)){

// }else{
//    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cbda991ab4c5455b909e1cb546250d08&pageSize=${props.pageSize}&page=${this.state.page + 1}`
//     this.setState({loading:true})
//    let data = await fetch(url)
//     let parseData = await data.json()
//     this.setState({
//         page:this.state.page+1,
//         articles:parseData.articles,
//         loading:false
//     })}
//    }

   const fetchMoreData = async() => {
    setpage(page+1)
     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page + 1}`
let data = await fetch(url)
    let parseData = await data.json()
    setarticles(articles.concat(parseData.articles))
    settotalResults(parseData.totalResults)
  };
  
    return (
      <React.Fragment>
        <div className="container my-3">
        <div className="text-center my-4" ><h1 style={{marginTop:'80px'}}>KonnichaNews - Top {(props.category).charAt(0).toUpperCase()+(props.category).slice(1)} Headlines</h1></div>
            {loading && <Spinner/>}
 <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length !== totalResults}
    loader={<Spinner/>}
    style={{overflow:'hidden'}}
  ><div className="container">
            <div className="row">
              {articles.map((element)=>{
                return <div className="col-md-4 d-flex justify-content-center my-3" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>})}
               
            </div>
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr;Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
          </div> */}
        </div>

      </React.Fragment>
    )
  
}
News.defaultProps ={
  pageSize:6,
  country:'in',
  category:'general'
}
News.propTypes={
  pageSize: PropTypes.number.isRequired,
  country : PropTypes.string.isRequired,
  category : PropTypes.string.isRequired

}
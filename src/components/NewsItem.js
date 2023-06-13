import React from 'react'

export default function NewsItem(props) {
    
    let {title,description,imageUrl,url,author,date,source}=props
    return (
        <React.Fragment>
           <div className="card" style={{width: "24.4rem" }}>
  <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-100262453,width-1070,height-580,imgsize-735052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl } className="card-img-top" alt="..."/>
  <span className="badge bg-dark" >{source}</span>
  <div className="card-body">
    <h5 className="card-title"> {title} </h5>
    <p className="card-text">{description?description:"Description coming soon"}</p>
    <p className="card-text"><small className='text-muted'>Publish by {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
    <div className="text-center">
      <a href={url} target='_blank' rel="noreferrer" className="btn btn-success">Read More</a>
    </div>
    
  </div>
</div>
            
        </React.Fragment>
        
    )
 
}

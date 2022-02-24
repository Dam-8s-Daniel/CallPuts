import React from "react";
import "./newsitem.css"


const NewsItem = ({title, description, url, urlToImage}) => {
    return (
        
        <a href={url}>
        <div className = 'News'>
           <a href = {url}><img className='NewsImage' src={urlToImage} alt="New Image" /></a> 
            <h3>
                {title}
            </h3>
            <p>{description}</p>
        </div>
        </a>
        
    )
}

export default NewsItem
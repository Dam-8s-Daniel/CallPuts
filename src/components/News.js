import React, {useState} from 'react'
import NewsItem from "./NewsItem";
import "./news.css"


export default function News () {

    const [searchTerm, setSearchTerm] = useState('')
    const [currentNews, setCurrentNews] = useState([])
    const [wikiResult, setWiki] = useState('')
    const [showNews, setShowNews] = useState(false)
    const [displayWiki, setDisplayWiki] = useState(false)

    const API_KEY = '2d719755f6344ec081bb6f9e86aa1bf2';

    let API_Call = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2022-03-01&sortBy=popularity&apiKey=${API_KEY}`


    const getNews = async () => {
        if (searchTerm === ""){
            alert('Please add a search term')
        }else{
            setCurrentNews([])
            setShowNews(true);
            const response = await fetch(API_Call)
                .then(res => res.json())
                .then(data =>setCurrentNews(data.articles));
                console.log(currentNews)
            }
    }

    const displayNews = currentNews.slice(0, 3).map(({title, description, url, urlToImage}) => (
        <NewsItem
            title={title}
            description={description}
            url={url}
            urlToImage={urlToImage}
        />
    ));

    const settingShowWiki = () => {
        if (wikiResult === ""){
            alert("Please add a search term")
        }
        else{
             fetch("http://localhost:5000/wiki",{
               method: 'POST',
               headers:{
                   "Content-Type": 'application/json'
               },
               body: JSON.stringify({
                   search: `${wikiResult}`
               })})
            .then(res => res.json())
            .then(data => setWiki(data['wiki_text']));
            
        }setDisplayWiki(true)
    }

    const displayWikiResult = <p>{wikiResult}</p>

    return (
        <div>
            <div className='NewsSearch'>
            <p>News search</p>

            <input
            required
            type='text'
            placeholder='Search news'
            onChange={e => {setSearchTerm(e.target.value);
            }}/>

            <button onClick={getNews}>
            Search</button>
           
            <div className='NewsDisplay'>
                {showNews && displayNews}
            </div>
            </div>
            <p>Wiki search</p>

            <input
            required
            type='text'
            placeholder='Search wikipedia'
            onChange={e => {
                setWiki(e.target.value);
                setDisplayWiki(false)
            }}/>

            <button onClick={settingShowWiki}>
            Search</button>
            <div className='WikiSearch'>
                {displayWiki && displayWikiResult}
            </div>
        </div>

    )
}
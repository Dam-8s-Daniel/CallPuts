import React, {useState} from 'react'




export default function News () {

    const [searchTerm, setSearchTerm] = useState('')
    const [currentNews, setCurrentNews] = useState([])
    const [wikiResult, setWiki] = useState('This area is for a wikipedia entry')
    const [showNews, setShowNews] = useState(false)
    const [displayWiki, setDisplayWiki] = useState(false)

    const API_KEY = '2d719755f6344ec081bb6f9e86aa1bf2';

    let API_Call = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2022-02-08&sortBy=popularity&apiKey=${API_KEY}`


    const getNews = async () => {
        if (searchTerm === ""){
            alert('Please add a search term')
        }else{
        setCurrentNews([])
        setShowNews(true);
        const response = await fetch(API_Call)
            .then(res => res.json())
            .then(data =>{ 
                console.log(data['articles']);
                let articles = data['articles']
                for (let i = 0; i < 3; i++ ){
                    setCurrentNews(oldArray => [...oldArray, `${i + 1}. ` + articles[i]['title'], articles[i]['url'] ])
                }
            }  
            )}
    }    

    const displayNews = currentNews.map((element, index) => index % 2 === 0 ? 
    <p>{element}</p> : <a href={element}>link</a>)

    const settingShowWiki = () => setDisplayWiki(true)

    const displayWikiResult = <p>You searched for {wikiResult}. The wikipedia page will be displayed here.</p>

    return (
        <div>
            <p>News search</p>

            <input
            required
            type='text'
            placeholder='Search news'
            onChange={e => {setSearchTerm(e.target.value);
            }}/>

            <button onClick={getNews}>
            Search</button>
           
            <div>
                {showNews && displayNews}
            </div>

            <p>Wiki search</p>

            <input
            required
            type='text'
            placeholder='Search wikipedia'
            onChange={e => {
                setWiki(e.target.value);
            }}/>

            <button onClick={settingShowWiki}>
            Search</button>
            <div>
                {displayWiki && displayWikiResult}
            </div>
        </div>

    )
}
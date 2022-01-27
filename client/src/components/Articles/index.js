import React, {  useState, useEffect } from 'react';
import { ArticleComponent } from './ArticleComponent';
import './ArticleComponent.css'
import { useNavigate } from 'react-router-dom'

const ArticleContainer = () => {
    
    const [articles,setArticle] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    useEffect(() =>{
        const loadUser = () => {
            return fetch(`http://192.168.0.102:5000/articles`,{
                "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "no-cors"
                }
            })
            .then(async response =>{
                //let [user_id,type]= await response.data
                if(response.status !== 200){
                    navigate('/', {replace: true})
                } else {
                    response = await response.json()
                    setArticle(response)
                    isLoading(false)
                }
            })
            .catch(err => console.log(err))
        }
        loadUser()
    },[])

    return (
        <>
            {!loading ?
            <div className="offers">
                {/* automatyzacja tego */}
                {articles.map((article,i)=>
                    <ArticleComponent article={article} key={i}/>
                )}
            </div> : null}
        </>
    )
};

export {ArticleContainer}
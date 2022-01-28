import React, {  useState, useEffect } from 'react';
import './ArticleComponent.css'
import {FaBookOpen} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {GLOBAL} from '../../config'

const ArticleComponent = ({article}) => {

    const [creator,setCreator] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    useEffect(() =>{
        const loadUser = () => {
            return fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/articles`,{
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
                    setCreator(response)
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
        <div className="article-container">
            
            <div className="article-info">
                
                <div className="article-header">
                
                    <h3> <FaBookOpen/> Autor: {creator[0].firstname} {creator[0].lastname}</h3>
                    <h5>Tytuł: {article.title}</h5>
                </div>
            </div>
            <div className="article-content">
            
                {article.content}
            </div>
        </div>: null}
        </>
    )
};

export {ArticleComponent}
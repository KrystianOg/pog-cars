import React, {  useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { ArticleComponent } from './ArticleComponent';
import { Container,PaginationContainer } from './ArticleElements'
import './ArticleComponent.css'
import {GLOBAL} from '../../config'
import {Spinner} from 'react-bootstrap'

const ArticleContainer = () => {
    
    const [articles,setArticles] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);
    const [page, setPage] = useState(1);
    let amount = 5

    const loadArticles = () => {
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/articles/anchor=${(page-1)*amount}&amount=${amount}`,{
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
                setArticles(response)
                isLoading(false)
            }
        })
        .catch(err => console.log(err))
    }

    useEffect(() =>{
        loadArticles()
    },[page])

    const handlePageChange = (event, value) =>{
        isLoading(true)
        setPage(value)
        loadArticles()
    }

    return(
        <>
            {!loading ?
                <Container>
                    <PaginationContainer count={12} siblingCount={2} page={page} onChange={handlePageChange}/>
                    {articles.map((article,i) =>
                        <ArticleComponent article={article} key={i}/>)}
                    <PaginationContainer count={12} siblingCount={2} page={page} onChange={handlePageChange}/>
                </Container> : <Spinner animation='border'/>
            }
        </>
    )
};

export {ArticleContainer}
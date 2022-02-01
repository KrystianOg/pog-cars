import React, {  useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { ArticleComponent } from './ArticleComponent';
import { ArticleComment } from './ArticleComment';
import { Container,PaginationContainer } from './ArticleElements'
import './ArticleComponent.css'
import {GLOBAL} from '../../config'
import {Spinner} from 'react-bootstrap'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { faCommentSlash } from '@fortawesome/free-solid-svg-icons';
import { ReactSession } from 'react-client-session';

const ArticleContainer = () => {
    
    const [articles,setArticles] = useState(null);
    const[comments,setComments]=useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);
    const [page, setPage] = useState(1);
    let amount = 1

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
                    <PaginationContainer count={60} siblingCount={2} page={page} onChange={handlePageChange}/>
                    {(ReactSession.get('type') === 'ADMIN' || ReactSession.get('type') === 'AGENT') ?
                    <div>
                    <Button variant="contained" onClick={()=>{ navigate('/articles/add', {replace: true})}} startIcon={<AddIcon />}>
                    Add article
                    </Button>
                    </div> : null}
                    {articles.map((article,i) =>
                        <ArticleComponent article={article} key={i}/>)}
                    <PaginationContainer count={60} siblingCount={2} page={page} onChange={handlePageChange}/>
                </Container> : <Spinner animation='border'/>
            }
        </>
    )
};

export {ArticleContainer}
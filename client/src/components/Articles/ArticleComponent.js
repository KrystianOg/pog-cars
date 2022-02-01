import React, {  useState, useEffect } from 'react';
import './ArticleComponent.css'
import {FaBookOpen} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {GLOBAL} from '../../config'
import {makeStyles} from '@mui/styles'
import {ArticleComment} from './ArticleComment.js'
import {Stack} from '@mui/material';
import {TextField} from '@mui/material';
import { ReactSession } from 'react-client-session';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


const ArticleComponent = (props) => {
    
    const useStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 10,
            color: 'white',
            height: 48,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            padding: '0 30px',
            margin: '5px auto'
        },
        btn: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 10,
            color: 'white',
            height: 48,
            width: 140,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            padding: '0 30px',
            margin: '10px'
        }
    });
    const [creator,setCreator] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);
    const [comments,setComments] = useState(null);
    const [content, setContent] = useState('Hello')

    const classes = useStyles();
        const loadArticles = () => {
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/comments/article=${props.article.article_id}`,{
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
                setComments(response)
                isLoading(false)
            }
        })
        .catch(err => console.log(err))
    }
    function addComment() {
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/comments/add`,{
            method: 'POST',
            'headers': {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            }, 
            "body": JSON.stringify({ 'creator_id': ReactSession.get('user_id'), 'content': content, 'article_id':props.article.article_id})
        })
        .then(async response =>{
            //let [user_id,type]= await response.data
            if(response.status === 201){
                navigate('/articles', {replace: true})
                console.log(response)
            } else {
                console.log(response)
            }
        }).catch(err=> console.log(err))
    }
    useEffect(()=>{
        loadArticles();
    },[])
    return (
        <>

        <div className="article-container">
            <div className="article-info">
                <div className="article-header">
                    <h3>Autor: {props.article.creator_firstname} {props.article.creator_lastname}</h3>
                    <h5>Tytuł: {props.article.title}</h5>
                </div>
            </div>
            <div className="article-content">
                {props.article.content}
            </div>
        <h4>Comments: </h4>

        <TextField
            required
            id="outlined-required"
            label="Add Comment"
            value={content}
            onChange={(e) =>{setContent(e.target.value)}}
        />
        <Button variant="contained" className={classes.btn} onClick={()=>{addComment(); navigate('/articles') }} endIcon={<SendIcon />}>
            Comment
        </Button>
            {!loading ?
        <Stack>
            
        {comments.map((comment,i) =>
            <ArticleComment comment={comment} key={i}/>)}
        </Stack>
        :null}
        </div>
        
        </>
        
    )
};

export {ArticleComponent}
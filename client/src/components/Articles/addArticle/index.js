import React, {useState,useEffect} from 'react';
import {ArticleComponent} from '../ArticleComponent'
import {AddArticleContainer, AddArticleColumn} from './AddArticleComponents'
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'
import '../ArticleComponent.css'

import { ReactSession } from 'react-client-session';
import {Button, TextField, MenuItem, Box, Stack} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles'
import {GLOBAL} from '../../../config'
import LoadingButton from '@mui/lab/LoadingButton';

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 10,
        width: '200px',
        margin: '5px 10px'
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

const AddArticleComponent = () => {

    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)
    const navigate = useNavigate()

    const handleChange = (e) =>{
        this.setState({
            textFieldValue: e.target.value
        });
    }
    
    function addArticle() {
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/articles/add`,{
            method: 'POST',
            'headers': {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            }, 
            "body": JSON.stringify({ 'creator_id': ReactSession.get('user_id'), 'title': title, 'content': content})
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

    const classes = useStyles();
    return (
        <AddArticleContainer>
            <AddArticleColumn>
            {/*dodawanie artykulu*/}
                
                <div className="article-container">
                    <div className="article-info">

                    <Stack sx={{width: "45ch"}}>
                        <TextField variant="standard" fullWidth label="Tytul" className={classes.root} onChange={(e) =>{setTitle(e.target.value)}}/>
                        <TextField variant="standard" rows={10} fullWidth label="Tresc" multiline  className={classes.root} onChange={(e) =>{setContent(e.target.value)}}/>  
                        </Stack>
                    </div>
                    <Button variant="outlined" sx={{margin: '10px'}} className={classes.btn} onClick={addArticle}>Add article</Button>
                    
                </div>

            </AddArticleColumn>
        </AddArticleContainer>
    );
};

export default AddArticleComponent;

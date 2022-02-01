import React, {  useState, useEffect } from 'react';
import './ArticleComment.css'
import {FaMinus} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {GLOBAL} from '../../config'
import {makeStyles} from '@mui/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import {Box, IconButton} from '@mui/material';
import { ReactSession } from 'react-client-session';

const ArticleComment = ({comment}) => {

    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);
    const [del, setDelete] = useState(true);

    const deleteComment = () => {
            //request
            fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/id=${comment.comment_id}`,{
                "method": "PATCH",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "no-cors"
                },
                "body": JSON.stringify({user_id: ReactSession.get('user_id')})
            })
            .then(async response =>{
                //let [user_id,type]= await response.data
                if(response.status === 204){
                    comment.deleted = 1
                    setDelete(false)
                    console.log("Car deleted")
                }
            })
            .catch(err => console.log(err))
    }

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
        }
    });
    

    const classes = useStyles();
    return (
        <>

        <div className="comment-container">
            <Box sx={{display:'flex', justifyContent:'center', gap: 1, gridTemplateColumns:'repeat(2,1fr)'}}>
            <div className="comment-info">
                <div className="comment-header">
                    <h3>{comment.firstname} {comment.lastname}</h3>
                    <h5>{comment.content}</h5>
                </div>
            </div>
            {(ReactSession.get('type') === 'ADMIN' || ReactSession.get('type') === 'AGENT') && !comment.deleted ?
            <IconButton aria-label="delete" color="primary" onClick={deleteComment}>
                <DeleteIcon />
            </IconButton>:null}
            </Box>
        </div>
        </>
    )
};

export {ArticleComment}
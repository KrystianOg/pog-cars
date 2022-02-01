import React, {  useState, useEffect } from 'react';
import './ArticleComponent.css'
import {FaBookOpen} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {GLOBAL} from '../../config'


const ArticleComponent = ({article}) => {

    const [creator,setCreator] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);


    return (
        <>

        <div className="article-container">
            <div className="article-info">
                <div className="article-header">
                    <h3> <FaBookOpen/> Autor: {article.creator_firstname} {article.creator_lastname}</h3>
                    <h5>Tytuł: {article.title}</h5>
                </div>
            </div>
            <div className="article-content">
                {article.content}
            </div>
        </div>
        </>
    )
};

export {ArticleComponent}
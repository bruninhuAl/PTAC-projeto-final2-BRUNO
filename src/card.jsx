import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

export default function Card({ item }) {
    const videomostra = item.url.slice(17)
    return(
        <div className='video-card'>
            <iframe 
                width="796" 
                height="448"
                src={`https://www.youtube.com/embed/${videomostra}`}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <h1>{item.Titulo}</h1>
        </div>
    )
}
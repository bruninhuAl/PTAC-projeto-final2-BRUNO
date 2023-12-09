import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

export default function Card({ x }) {
    return(
        <div>
            <iframe 
                width="796" 
                height="448"
                src={
                    `https://www.youtube.com/embed/` ${X}}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        </div>
    )
}
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from "./card";
import "./home.css"

export default function Detalhes() {
    const pegarvideos = JSON.parse(localStorage.getItem('Lista')) || [];
    const { id } = useParams();
    const pegaumvideo = pegarvideos.find((item) => item.id === id) || null;

    return (
        <div>
            <div className="container">
                <nav className="sidebar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/destaque">Em Destaque</Link></li>
                        <li><Link to="/registro">Novo Vídeo</Link></li>
                    </ul>
                </nav>
                {pegaumvideo && (
                    <>
                        <Card item={pegaumvideo}></Card>
                        <p>{pegaumvideo.Descricao}</p>
                    </>
                )}
            </div>
        </div>
    );
}

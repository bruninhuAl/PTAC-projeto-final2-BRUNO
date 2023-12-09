import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from "./card";

export default function detalhes(){
    const pegarvideos = JSON.parse(localStorage.getItem('Lista')) || [];
    const {id} = useParams()
    const pegaumvideo = pegarvideos.find
}
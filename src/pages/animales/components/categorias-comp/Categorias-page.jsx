import React from 'react';
import './Categorias-page.css';
import AnimalesPage from '../Animales-comp/Animales-page';

const CategoriasPage =(props) =>{
    return(
        <div>
            <div className="categorias-page">
                <span>Categorias</span>
                <AnimalesPage animalesList = {props.animalesList}/>
            </div>
        </div>
        
    );
}

export default CategoriasPage;
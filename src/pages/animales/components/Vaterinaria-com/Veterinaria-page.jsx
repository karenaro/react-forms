import React from 'react';
import CategoriasPage from '../categorias-comp/Categorias-page';
import FormularioPage from '../Formulario-comp/Formulario-page';

const VeterinariaPage =() =>{

    return(
        <div className="veterinaria-page">
        <span>Veterinaria</span>
        <CategoriasPage animalesList = {props.animalesList}/>
        <FormularioPage/>
        </div>
    );
}

export default VeterinariaPage;
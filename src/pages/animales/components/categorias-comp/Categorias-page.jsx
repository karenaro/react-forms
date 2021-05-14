import React from 'react';
import './Categorias-page.css';
import AnimalesPage from '../Animales-comp/Animales-page';

//

const CategoriasPage =(props) =>{
    return(
        <div>
            <div className="categorias-page">
            <span>Categorias</span>
            {props.animalesLis.map((categories, index)=>{
                return (
                    <React.Fragment key={categories.id}>
                    <AnimalesPage categoryName={categories.name}/>
                    {categories.animals.map((animales, indexanimal)=>{
                        return(
                            <AnimalesPage key={animal.id} animal={animales}/>
                            );
                    })}
                    </React.Fragment>
                );
            })}

            <AnimalesPage/>
            </div>
        </div>
        
    );
}

export default CategoriasPage;
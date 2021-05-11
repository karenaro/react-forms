import React from 'react';

const AnimalesPage = (props) =>{

    //console.log({props}); <span>animales</span>
    return(
        <div className="category">
            
                {props.animalesLis.map((categories, index)=>{
                    return (
                        <React.Fragment key={categories.id}>
                            <CategoriasPage categoryName={categories.name}/>
                            {categories.animals.map((animales, indexanimal)=>{
                                return(
                                    <AnimalesPage key={animal.id} animal={animales}

                                );}
                                )}
                        <React.Fragment/>
                    );
                })}
        <div/>
    );
}

export default AnimalesPage;
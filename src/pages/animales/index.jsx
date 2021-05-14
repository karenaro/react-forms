import React from 'react';
import VeterinariaPage from './components/Vaterinaria-com/Veterinaria-page';


 const Animalespage = () => {

     let animalesList = [
        
            {
                id:"c1",
                name:'Domesticos',
                animals:[
                    {
                        id:"c1p1",
                        name:"paco",
                        Tamaño:"pequeño",
                        tipo:"gallo"
                    },
                    {
                        id:"c1p2",
                        name:"kitty",
                        Tamaño:"mediano",
                        tipo:"gato"
                    },
                    {
                        id:"c1p3",
                        name:"Draco",
                        Tamaño:"mediano",
                        tipo:"perro"
                    },
                    {
                        id:"c1p4",
                        name:"Napoleon",
                        Tamaño:"grande",
                        tipo:"pato"
                    },
                    {
                        id:"c1p5",
                        name:"claudia",
                        Tamaño:"mediano",
                        tipo:"gallina"
                    }
                ]

            },
            {
                id:"c2",
                name: "Silvestres",
                animals:[
                    {
                        id:"c2p1",
                        name:"oscar",
                        Tamaño:"gigante",
                        tipo:"oso"
                    },
                    {
                        id:"c2p2",
                        name:"roberto",
                        Tamaño:"mediano",
                        tipo:"loro"
                    },
                    {
                        id:"c2p3",
                        name:"beny",
                        Tamaño:"pequeño",
                        tipo:"loro"
                    }

                ]
            }
        ];

    return (
        <div className="animales-page">
       
            <VeterinariaPage animalesList={animalesList}/>
        </div>
        
    );
}


export default Animalespage;
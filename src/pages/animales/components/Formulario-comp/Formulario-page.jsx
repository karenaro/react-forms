import React, { useState } from 'react';
import './Formulario-page.css';

const FormularioPage = () => {
   
    const [category, setCategory] = useState('c1');
    const [name, setName] = useState('');
    const [raza, setRaza] = useState('');
    const [tipo, setTipo] = useState('');

    const nuevoAnimal =(event) =>{
        event.preventDefault();
        console.log('category' + category);
        console.log('name' + name);
        console.log('raza' + raza);
        console.log('tipo' + tipo);
        
    }

    return(
        <div className="formulario-page">
        <form>
        <table>
        <tr>
            <td>Categorias</td>
        </tr>
        <tr>
            <td>
                <select value={category} onChange={(event)=>{
                    setCategory(event.target.value);
    
                    //console.log(event.target.value);
                }}>
                    <option value="c1"> Domesticos</option>
                    <option value="c2"> Silvestres</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Nombre</td>
        </tr>
        <tr>
            <td><input type="text" value={name} onChange={(event)=>{
                setName(event.target.value);

                //console.log(event.target.value);
            }} /></td>
        </tr>
        <tr>
            <td>raza</td>
        </tr>
        <tr>
            <td><input type="text" value={raza} onChange={(event)=>{
                setRaza(event.target.value);

                //console.log(event.target.value);
            }}/></td>
        </tr>
        <tr>
            <td>tipo</td>
        </tr>
        <tr>
            <td><input type="text" value={tipo} onChange={(event)=>{
                setTipo(event.target.value);

                //console.log(event.target.value);
            }}/></td>
        </tr>

        <tr>
            <button onClick={nuevoAnimal}>Nuevo Animal</button>
        </tr>
        </table>
            
        </form>
        
        </div>
    );
}

export default FormularioPage;
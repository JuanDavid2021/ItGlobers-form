import React, { useState } from 'react'
import "./FormTravel.css"
import Swal from 'sweetalert2'
import { Footer } from '../Footer/Footer';
import { validateInput } from '../../utils/validateInput';


export const FormTravel = ({airline}) => {

  const [errors, setErrors] = useState({}); 
  const[input, setInput] =useState({
    name:"",
    email:"",
    cel:"",
    age:""  
  })
   
  const handleChange=(e)=>{
   setInput({
     ...input,
     [e.target.name] : e.target.value
    })
  
    setErrors(validateInput({
      ...input,
      [e.target.name]: e.target.value
    }));
  } 

  const handleClick=(e)=>{
   console.log(errors) 
   e.preventDefault()
   setErrors(validateInput({
    ...input,
    [e.target.name]: e.target.value
    }))

   if(input.name===""){
    Swal.fire({
      title: 'Error',
      text: 'debes completar el formulario',
      icon: 'error',
      timer: 1000,
    })
    return
   }
   else if(Object.entries(errors).length === 0){
     console.log(input)
     Swal.fire({
      text: 'Tu información fue enviada con éxito, estaremos en contacto contigo',
      icon: 'success',
      timer: 5000,
      showConfirmButton: false
    })
    setInput({
     name:"",
     email:"",
     cel:"",
     age:""   
    }) 
   }

   else{
    Swal.fire({
      title: 'Error',
      text: 'debes completar el formulario',
      icon: 'error',
      timer: 1000,
    })
   }
  }
  
  return (
      <>
      <div className='container-form'>
         <h1 className='saludoForm'>Hola, Bienvenido<br/><br/> 
         Sabemos que quieres viajar por la aerolinea {airline}<br/><br/>Por favor diligencia el siguiente formulario:</h1>
        <form className='form'>
        <div>  
        <input onChange={(e)=>handleChange(e)} type="text" name="name" pattern="^[a-zA-Z\s]+{2,254}" value={input.name} placeholder="Nombre Completo"></input>
        {errors.name && (<p className='danger'>{errors.name}</p>)} 
        </div>
        <div>
        <input onChange={(e)=>handleChange(e)} name="email" value={input.email} placeholder="Email"></input>
        {errors.email && (<p className='danger'>{errors.email}</p>)} 
        </div>
        <div>
        <input onChange={handleChange} pattern="^[0-9]+" name="cel" value={input.cel} placeholder="Celular"></input>
        {errors.cel && (<p className='danger'>{errors.cel}</p>)}
        </div>
        <div>
        <input onChange={handleChange} pattern="^[0-9]+" name="age" value={input.age} placeholder="Edad"></input>
        {errors.age && (<p className='danger'>{errors.age}</p>)}
        </div>
        </form>
    
        <div className='btn-submit-form'>
        <button className='btn-submit' type="submit" onClick={(e)=>handleClick(e)} >Enviar</button>
        </div>
    </div>
    <Footer/>
    </> 
  )
}

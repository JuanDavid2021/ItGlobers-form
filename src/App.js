import { Footer } from "./components/Footer/Footer";
import { FormTravel } from "./components/FormTravel/FormTravel";
import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import "./App.css";



function App() {

  const airline =[
    {id: 1, name: "Avianca"},
    {id: 2, name: "Latam"},
    {id: 3, name: "VivaAir"},
    {id: 4, name: "Iberia"},
    {id: 5, name: "Satena"}
    ]
    
    const [select, setSelect] = useState(false);
    const [company, setCompany] = useState("");
    const [open, setOpen] = useState(false);
  
    const handleClick=(name)=>{
     console.log(company)
     setSelect(true)
     setCompany(name) 
    }

    const handleShow=(e)=>{
      setOpen(!open)
    }

  return (
    <div className="app">
      <div className='container-app'>
        <nav className='airline'>
            <img src="./assets/logos/it-globers-logo.png"/>
            <button className="nav-toggle">  
            <FontAwesomeIcon icon={faBars} className="iconMenu" onClick={(e)=>handleShow(e)}/>
            </button>  
            <ul className={`nav-link ${!open ? "" : "showMenu"}`} > 
              {airline.map(airline=>(
                <li className="link-aerline" key={airline.id} onClick={()=>setOpen(false)}>
                    <a onClick={()=>handleClick(airline.name)}>
                    {airline.name}
                  </a>
                </li>))}
            </ul> 
        </nav>
  
        {
         select? <FormTravel airline={company}/> 
         : <div > 
              <div className="greetings">
              <h1>Hola, Bienvenido !</h1>
              <h2>Por favor selecciona la aerolínea en la que quieres viajar</h2>
              </div>
              <Footer/>
           </div>   
        }
    </div> 
    </div>
  );
}

export default App;

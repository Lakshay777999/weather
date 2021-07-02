import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PublicIcon from '@material-ui/icons/Public';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 

import './App1.css';
import { faCity } from '@fortawesome/free-solid-svg-icons';
const App1=()=>
{
    const sty ={
        backgroundColor: "rgb(183, 232, 235)",
       
         height:"50px"
    }
    const st1={
        marginTop:"200px"
    }
    const st2={
        marginTop:"80px",
        textTransform: "capitalize",
    }
    const st3={
        color:"darkblue",
       

    }
    const st4={
        marginTop:"100px",
        color:"grey",
    }
    const st5={
       
        color:"grey",
    }
    const st6={
        
        color:"grey",
    }
  const[set1,setval]=useState();
  const[search,setsearch]=useState("mumbai");
  useEffect(()=>
  {
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fc4752d40c014e6b37806c01f7241000`
      const fetchApi=async()=>{
          const res=await fetch(url);
          const resjes = await res.json();
          setval(resjes.main);

      }
      fetchApi();
  },[search])
    
    return(
        <>
        <div style={sty}>
<h1><b>Weather<span>By:Lakshay Tyagi</span></b></h1>
<div className="container h-100 w-50 d-flex justify-content-center">
    <input type="search" 
    className="form-control"
     placeholder="Search"
     style={st6}
    value={search}
     onChange={(event)=>{
return setsearch(event.target.value)
     }}    
     />
     
    </div>
    </div>
   {!set1 ? (
       <p className="container h-100 w-50 d-flex justify-content-center" style={st4}>No  such City or Empty input</p>
   ):(
       <div>
    <div className="container h-100 w-50 d-flex justify-content-center" style={st1}>
   <PublicIcon style={{fontSize:100 }}/>
   
    </div>
    <h1 className="container h-100 w-50 d-flex justify-content-center" style={st2}>{search}</h1>
   <h2 className="container h-100 w-50 d-flex justify-content-center" style={st3} ><b>{set1.temp}°C</b></h2>
   <h4 className="container h-100 w-50 d-flex justify-content-center" style={st5}>Feels like: {set1.feels_like}°C</h4>
   
   <h5 className="container h-100 w-50 d-flex justify-content-center" style={st5}>Pressure:{set1.pressure} || Humidity:{set1.humidity}</h5>
   </div>
   )}
   

    </>
    
    );
}
export default App1;
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
function App() {
 
  const[data,setData]=useState(0)
 
function ashu(){
setData(data+1);
}


function funDecrement(){
  setData(data-1);
}


function resetfun(){
  setData(0);
}

  return (


<div className="container">
  <div className='card text-center  ' style={{width:"700px" ,height:"300px" ,marginLeft:"170px",marginTop:"140px"}}>
    <div className='card-body'>
  
      
      
      <h1 style={{marginTop:"25px"}}>Counter App</h1>
      <h2 style={{marginTop:"30px"}}>{data}</h2>
      <Button style={{marginTop:"50px"}} onClick={ashu}  variant="primary" mx-3>Increment</Button>{' '}
      <Button style={{marginTop:"50px"}} onClick={resetfun}   variant="secondary">Reset</Button>{' '}
      <Button  style={{marginTop:"50px"}} onClick={funDecrement} variant="warning">Decrement</Button>{' '}

    </div>
    </div>
    </div>
  );
}

export default App;
 
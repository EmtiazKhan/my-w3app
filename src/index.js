import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

function Car(props){
  return(
    <>
      <li>I am a {props.brand}</li>
      <p>This for test changes show</p>
    </>
  )
}

function Garage(){
  const cars = ['Ford','BMW','Audi','Duronto'];
  return(
    <>
      <ul>
        {cars.map((car) => <Car brand={car}/>)}
      </ul>
    </>
  )
}

const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

import React from "react";
import {  Routes, Route, Link } from "react-router-dom";
import PizzaOrderForm from "./orderForm";


const style = { margin: '1rem', padding: '0.5rem', border: '2px solid black'} 

function Home(props){
  return (
  <div>
      <h1 style={{ ...style, borderColor: 'red' }}>Welcome to Lambda Eats!</h1>
      <Link to="/pizza" id="order-pizza">
        Order Pizza
      </Link>
    </div>
  );
};
function Pizza(props){
  return <PizzaOrderForm />
};


function App() {
  return (
    <div>
      <h1>Lambda Eats
      <nav>
          <Link to='/'>Home</Link>&nbsp;
          <Link to='/pizza'>Hungry?</Link>
      </nav>
      </h1>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pizza' element={<Pizza />}/>;
      </Routes>
      </div>
  );
};
export default App;

import React, { useState } from 'react';
import './orderForm.css';


const PizzaOrderForm = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [size, setSize] = useState(''); 
  const [toppings, setToppings] = useState({
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
  });
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    if (newName.length < 2) {
      setNameError('name must be at least 2 characters');
    } else {
      setNameError('');
    }
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleToppingChange = (event) => {
    const { name, checked } = event.target;
    setToppings((prevToppings) => ({
      ...prevToppings,
      [name]: checked,
    }));
  };

  const handleSpecialInstructionsChange = (event) => {
    setSpecialInstructions(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      size: size,
      ...toppings,
      special: specialInstructions,
    };

    console.log(formData);
  };

  return (
    <div>
      <h1>Pizza Order Form</h1>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input
          type="text"
          id="name-input"
          value={name}
          onChange={handleNameChange}
        />
        {nameError && <div style={{ color: 'red' }}>{nameError}</div>}

        <label htmlFor="size-dropdown">Size:</label>
        <select id="size-dropdown" value={size} onChange={handleSizeChange}>
          <option value="">Select Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <div>
          <label>
            Pepperoni:
            <input
              type="checkbox"
              name="topping1"
              checked={toppings.topping1}
              onChange={handleToppingChange}
            />
          </label>
        </div>
        <div>
          <label>
            Sausage:
            <input
              type="checkbox"
              name="topping2"
              checked={toppings.topping2}
              onChange={handleToppingChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cheese:
            <input
              type="checkbox"
              name="topping3"
              checked={toppings.topping3}
              onChange={handleToppingChange}
            />
          </label>
        </div>
        <div>
          <label>
            Chicken:
            <input
              type="checkbox"
              name="topping4"
              checked={toppings.topping4}
              onChange={handleToppingChange}
            />
          </label>
        </div>

        <label htmlFor="special-text">Special Instructions:</label>
        <textarea
          id="special-text"
          value={specialInstructions}
          onChange={handleSpecialInstructionsChange}
        />

        <button type="submit" id="order-button">Add to Order</button>
      </form>
    </div>
  );
};

export default PizzaOrderForm;

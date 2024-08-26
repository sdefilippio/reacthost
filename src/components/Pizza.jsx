import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pizzas')
      .then(response => setPizzas(response.data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <div className="pizza-list">
      {pizzas.map(pizza => (
        <div key={pizza.id} className="pizza-card">
          <Link to={`/pizza/${pizza.id}`}>
            <img src={pizza.img} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>{pizza.desc}</p>
            <p>Price: ${pizza.price / 100}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pizza;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PizzaCard = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/pizzas/${id}`)
      .then(response => setPizza(response.data))
      .catch(error => console.error('Error fetching pizza details:', error));
  }, [id]);

  if (!pizza) return <p>Loading...</p>;

  return (
    <div className="pizza-detail">
      <img src={pizza.img} alt={pizza.name} />
      <h1>{pizza.name}</h1>
      <p>{pizza.desc}</p>
      <p>Price: ${pizza.price / 100}</p>
      <p>Ingredients: {pizza.ingredients.join(', ')}</p>
    </div>
  );
};

export default PizzaCard;

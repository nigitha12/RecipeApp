import React from 'react';

export default function Details({ recipe, onClose }) {
  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Steps: {recipe.steps}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

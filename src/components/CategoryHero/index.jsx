import './styles.sass';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context';


export const CategoryHero = ({ category }) => {
  
  return (
      <div className="category-hero">
          <div className="category-hero-img">
            <img src={category.categoryhero} alt={category.name} />
          </div>
          <div className="category-hero-info">
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </div>

      </div>
  )
}
// src/components/RecipeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './recipelist.css';
import stockImage from './stock_image.jpg';  // Import a stock image

const API = 'http://ec2-18-217-79-15.us-east-2.compute.amazonaws.com:8000/api/recipes/';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get(API)
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the recipes!', error);
            });
    }, []);

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div className="recipe-card" key={recipe.id}>
                    <img src={recipe.image || stockImage} alt={recipe.title} />
                    <h2>{recipe.title}</h2>
                    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                    <p><strong>Instructions:</strong> {recipe.instructions}</p>
                    <p><strong>Author:</strong> {recipe.author}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;

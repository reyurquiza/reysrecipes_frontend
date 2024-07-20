import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './recipelist.css';
import stockImage from './stock_image.jpg';

const API = 'http://18.144.63.82:8000/api/recipes/';

const RecipeList = ({ isSuperuser }) => {
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

    const handleDelete = (id) => {
        axios.delete(`${API}${id}/`)
            .then(response => {
                setRecipes(recipes.filter(recipe => recipe.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the recipe!', error);
            });
    };

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div className="recipe-card" key={recipe.id}>
                    <img src={recipe.image || stockImage} alt={recipe.title} />
                    <div className="recipe-content">
                        <h2 className="recipe-title">{recipe.title}</h2>
                        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                        <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        <p><strong>Author:</strong> {recipe.author}</p>
                        {isSuperuser && (
                            <button onClick={() => handleDelete(recipe.id)} className="delete-button">Delete</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
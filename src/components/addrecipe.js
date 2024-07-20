import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './addrecipe.css';

// Ideally hide this 
const API = 'http://18.144.63.82:8000/api/recipes/';

const AddRecipe = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('ingredients', ingredients);
        formData.append('instructions', instructions);
        formData.append('author', author);
        if (image) {
            formData.append('image', image);
        }

        axios.post(API, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log('Recipe added:', response.data);
            setTitle('');
            setIngredients('');
            setInstructions('');
            setAuthor('');
            setImage(null);
            navigate('/');  // Redirect to home page
        })
        .catch(error => {
            console.error('There was an error adding the recipe!', error);
        });
    };

    return (
        <div className="add-recipe">
            <h1>Add Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Ingredients:</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Instructions:</label>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Image:</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipe;

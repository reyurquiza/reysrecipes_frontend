// src/components/AddRecipe.js
import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState(null);

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

        axios.post('http://127.0.0.1:8000/api/recipes/', formData, {
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
        })
        .catch(error => {
            console.error('There was an error adding the recipe!', error);
        });
    };

    return (
        <div>
            <h1>Add Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Ingredients:</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </div>
                <div>
                    <label>Instructions:</label>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div>
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

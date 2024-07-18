import React from 'react';
import RecipeList from './components/recipelist';
import AddRecipe from './components/addrecipe';

function App() {
    return (
        <div className="App">
            <RecipeList />
            <AddRecipe />
        </div>
    );
}

export default App;

import React from 'react';
import RecipeList from './components/recipelist';
import AddRecipe from './components/addrecipe';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
              <header className="App-header">
                  <h1 className="App-title">Reys Recipes</h1>
                  <nav className="App-nav">
                      <Link to="/">Home</Link>
                      <Link to="/add-recipe">Submit Recipe</Link>
                  </nav>
              </header>
              <main>
                  <Routes>
                      <Route path="/" element={<RecipeList />} />
                      <Route path="/add-recipe" element={<AddRecipe />} />
                  </Routes>
              </main>
          </div>
      </Router>
  );
}

export default App;

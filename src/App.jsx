import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import Recipe from "./components/Recipe";
import style from './app.module.css'

function App() {
  const APP_ID = "27f696d4";
  const APP_KEY = "f5109d3c705aa75d3ea50b61d6c25c9e";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(
    () => {
      getRecipes();
    },

    // effect will run every time we change query
    [query]
  );

  // get recipe form api call
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();

    setRecipes(data.hits);

    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div >
      {/* <SearchInput
        search={search}
        getSearch={getSearch}
        updateSearch={updateSearch}
      /> */}
       <h1 style={{marginBottom:"80px", textAlign:"center"}}>Recipe Finder</h1>
      <form className="search-form" onSubmit={getSearch} style={{textAlign:"center"}}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className={style.items}>
        {recipes.length > 0 ? (
          <ul className={style.container}>
            {recipes.map((recipe) => (
                 <Recipe 
                 key={recipe.recipe.label} 
                 title={recipe.recipe.label} 
                 calories={recipe.recipe.calories} 
                 image={recipe.recipe.image} 
                 ingredients={recipe.recipe.ingredients} 
                 url={recipe.recipe.url}
               /> 
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default App;

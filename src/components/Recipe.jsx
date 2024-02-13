import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients,url }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="" />

      <ol>
        {ingredients.map((ingredient) => (
          <li className={style.text}>{ingredient.text}</li>
        ))}
      </ol>
      <button onClick={() => window.open(url, '_blank')}>Show me how to coock it </button>;


      <p>Calories : {calories}</p>

    </div>
  );
};

export default Recipe;

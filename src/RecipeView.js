import React from "react";


function RecipeView({ recipe, deleteRecipe }) {


    return(
        <tr>
            <td key={(recipe.name)}>
                <p>{(recipe.name)}</p>
            </td>
            <td key={(recipe.cuisine)}>
                <p>{(recipe.cuisine)}</p>
            </td>
            <td key={(recipe.photo)}>
                <img src={(recipe.photo)} alt="Recipe"/>
            </td>
            <td className="content_td" key={(recipe.ingredients)}>
                <p>{(recipe.ingredients)}</p>
            </td>
            <td className="content_td" key={(recipe.preparation)}>
                <p>{(recipe.preparation)}</p>
            </td>
            <td key={(recipe.index)}>
                <button name="delete" onClick={deleteRecipe}>Delete</button>
            </td>
        </tr>
    );
};

export default RecipeView;
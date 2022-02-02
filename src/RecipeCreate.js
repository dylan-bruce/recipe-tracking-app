import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => {setName(event.target.value)};
  const handleCuisineChange = (event) => {setCuisine(event.target.value)};
  const handlePhotoChange = (event) => {setPhoto(event.target.value)};
  const handleIngredientsChange = (event) => {setIngredients(event.target.value)};
  const handlePreparationChange = (event) => {setPreparation(event.target.value)};

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name: name,
      cuisine: cuisine,
      photo: photo,
      ingredients: ingredients,
      preparation: preparation,
    };
    addRecipe(newRecipe);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
    console.log(newRecipe);
  };

  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td><input type="text" name="name" placeholder="Name" onChange={handleNameChange} /></td>
            <td><input type="text" name="cuisine" placeholder="Cuisine" onChange={handleCuisineChange} /></td>
            <td><input type="text" name="photo" placeholder="Photo" onChange={handlePhotoChange} /></td>
            <td><textarea type="text" name="ingredients" placeholder="Ingredients" onChange={handleIngredientsChange} /></td>
            <td><textarea type="text" name="preparation" placeholder="Preparation" onChange={handlePreparationChange} /></td>
            <td>
              <button type="submit" onClick={handleSubmit} >Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

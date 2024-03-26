import React from "react";
import styled from "styled-components";
import { SearchBtn, SelectS } from "./styles/ButtonS";
import { RecipeContextComp } from "../context/RecipeProvider";
import { FormContainerS } from "./styles/ContainerS";

const InputS = styled.input`
  width: 60%;
  max-width: 500px;
  margin: 0.1rem;
  padding: 0.1rem 0.5rem;
  &:focus {
    outline: none;
  }
`;

const Form = () => {
  const { query, setQuery, setSearch, setMealType } = RecipeContextComp();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <FormContainerS>
      <form onSubmit={handleSubmit} className="search-form">
        <InputS
          type="text"
          className="search-bar"
          placeholder="Search recipe..."
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchBtn type="submit" className="search-button">
          Search
        </SearchBtn>
        <SelectS
          name="mealTypes"
          id="mealTypes"
          onChange={(e) => setMealType(e.target.value)}
        >
          <option selected value="all">
            All
          </option>
          <option value="breakfast">Breakfast</option>
          <option value="brunch">Brunch</option>
          <option value="lunch/dinner">Lunch/Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">TeaTime</option>
        </SelectS>
      </form>
    </FormContainerS>
  );
};

export default Form;

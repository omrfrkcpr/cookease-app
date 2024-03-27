import React from "react";
import { SearchBtn, SelectS } from "./styles/ButtonS";
import { AppContextComp } from "../context/AppProvider";
import { FormContainerS } from "./styles/ContainerS";
import { InputS } from "./styles/InputS";

const Form = () => {
  const { query, setQuery, setSearch, setMealType } = AppContextComp();

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
        <SearchBtn type="submit" className="search-button">
          Search
        </SearchBtn>
      </form>
    </FormContainerS>
  );
};

export default Form;

import React from "react";
import styled from "styled-components";
import { SearchBtn } from "./styles/ButtonS";
import { RecipeContextComp } from "../context/RecipeProvider";
import { FormContainerS } from "./styles/ContainerS";

const InputS = styled.input`
  width: 80%;
  max-width: 500px;
  margin: 0.1rem;
  padding: 0.1rem 0.5rem;
  &:focus {
    outline: none;
  }
`;

const Form = () => {
  const { query, setQuery, setSearch } = RecipeContextComp();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
    setQuery("");
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
      </form>
    </FormContainerS>
  );
};

export default Form;

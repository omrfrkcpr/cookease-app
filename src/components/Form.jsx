import React from "react";
import styled from "styled-components";
import { SearchBtn } from "./styles/ButtonS";
import { RecipeContextComp } from "../context/RecipeProvider";

const Form = () => {
  const { query, setQuery, setSearch } = RecipeContextComp();
  const InputS = styled.input`
    width: 300px;
    margin: 0.1rem;
    padding: 0.1rem 0.5rem;
    &:focus {
      outline: none;
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
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
  );
};

export default Form;

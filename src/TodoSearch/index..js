import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch () {

  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <input
      className="TodoSearch"
      placeholder='Busca aqui'
      onChange={onSearchValueChange}
      value={searchValue}
    />
  )
}

export {TodoSearch};
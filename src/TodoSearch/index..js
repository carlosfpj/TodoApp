import React, { useState } from "react";
import "./TodoSearch.css";

function TodoSearch ({searchValue, setSearchValue}) {


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
import React from "react";
import "./CreateTodoButton.css";

const elclick = (msg)=> console.log("aqui hubo un click");

function CreateTodoButton () {
  return (
    <button
      className="CreateTodoButton"
      onClick={elclick}
      >+</button>
  )
}

export {CreateTodoButton}
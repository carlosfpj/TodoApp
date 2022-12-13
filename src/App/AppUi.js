import React from "react";
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index..js';
import { TodoList } from '../TodoList/index..js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext, todoContext} from '../TodoContext';
import { useContext } from "react";
import { Modal } from "../Modal/index.js";
import {TodoForm} from "../TodoForm/index.js";
import {TodosError} from "../TodosError/index.js";
import {TodosLoading} from "../TodosLoading/index.js";
import {EmptyTodos} from "../EmptyTodos/index.js";

function AppUi () {

  const { error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal } = useContext(TodoContext);

  return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

          <TodoList>
            {error && <TodosError error={error}/>}
            {loading && <TodosLoading/>}
            {(!loading && !searchedTodos.length) && <EmptyTodos/>}
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
       />
    </React.Fragment>
  );
}

export {AppUi}
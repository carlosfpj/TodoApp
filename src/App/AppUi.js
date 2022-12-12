import React from "react";
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index..js';
import { TodoList } from '../TodoList/index..js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext, todoContext} from '../TodoContext';
import { useContext } from "react";

function AppUi () {

  const { error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo, } = useContext(TodoContext);

  return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

          <TodoList>
            {error && <p>Desespérate, hubo un error</p>}
            {loading && <p>Estamos cargando, no desesperes</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
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

      <CreateTodoButton />
    </React.Fragment>
  );
}

export {AppUi}
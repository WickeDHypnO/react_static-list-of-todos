/* eslint-disable linebreak-style */
// Don't forget to import the React library
import React from 'react';
import TodoInfo, { Todo } from '../TodoInfo/TodoInfo';
// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

const TodoList: React.FC<Todo[]> = (todoList: Todo[]) => {
  const todoListArray:Todo[] = Object.values(todoList); // Bad hack, I hate getting data with boilerplate code

  return (
    <div>
      { todoListArray.map(todo => <TodoInfo {...todo} />) }
    </div>
  );
};
// Add a default export statement for TodoInfo component to use it in the other files

export default TodoList;

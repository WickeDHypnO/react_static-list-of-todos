/* eslint-disable linebreak-style */
// Don't forget to import the React library
import React from 'react';
import UserInfo, { User } from '../UserInfo/UserInfo';

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}

const TodoInfo: React.FC<Todo> = (todo: Todo) => {
  if (todo.user === null) {
    return (
      <div>
        Title:
        {todo.title}
        <br />
        Completed:
        {todo.completed.toString()}
        <br />
      </div>
    );
  }

  return (
    <div>
      Title:
      {todo.title}
      <br />
      Completed:
      {todo.completed.toString()}
      <br />
      Asignee:
      <UserInfo {...todo.user} />
    </div>
  );
};

// Add a default export statement for TodoInfo component to use it in the other files
export default TodoInfo;

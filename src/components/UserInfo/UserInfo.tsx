/* eslint-disable react/no-unused-prop-types */
/* eslint-disable linebreak-style */
// Don't forget to import the React library
import React from 'react';
// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)
export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const UserInfo: React.FC<User> = (user: User) => {
  return (
    <div>
      Name:
      { user.name }
      <br />
      Email:
      { user.email }
      <br />
      Username:
      { user.username }
      <br />
    </div>
  );
};

// Add a default export statement for UserInfo component to use it in the other files
export default UserInfo;

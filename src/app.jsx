import React from 'react';
import { UserCard } from "./user-card/user-card";
export const App = () => {
const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      {arr.map((user) => (
        <UserCard id={user}/>
      ))}
    </div>
  );
};

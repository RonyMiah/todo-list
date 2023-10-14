import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export function useAuth() {
  return useContext(TodoContext);
}

// eslint-disable-next-line react/prop-types
export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  // save todo object
  const onSave = (data) => {
    const allTodos = [...todos];
    allTodos.push(data);
    localStorage.setItem('todos', JSON.stringify(allTodos));
    setTodos(allTodos);
  };

  // update a todo only takes the todo object and the index of the todo
  const onUpdate = (data, index) => {
    const allTodos = [...todos];
    const obj = { ...allTodos[index], ...data };
    allTodos.splice(index, 1, obj);
    localStorage.setItem('todos', JSON.stringify(allTodos));
    setTodos(allTodos);
  };

  //delete todo it only takes index of todo
  const onDelete = (index) => {
    const allTodos = [...todos];
    allTodos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(allTodos));
    setTodos(allTodos);
  };

  const value = {
    todos,
    onSave,
    onUpdate,
    onDelete,
    search,
    setSearch,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

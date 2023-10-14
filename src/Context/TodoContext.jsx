

export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TodoProvider({ children }) {

  const value = {

  }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

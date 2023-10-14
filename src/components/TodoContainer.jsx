import { FcDocument } from 'react-icons/fc';
import TodoItem from './TodoItem';
import { useAuth } from '../Context/todoContext';
function TodoContainer() {
  const { todos, onUpdate, onDelete, search } = useAuth();

  const searchedTodos = [
    ...(search
      ? todos.filter((f) => f.todo.toLowerCase().includes(search.toLowerCase()))
      : todos),
  ];

  return (
    <>
      {/* if no items found on search  */}
      {search && searchedTodos.length == 0 && (
        <div className="text-center p-5">
          <FcDocument className="w-14 h-14 my-2 mx-auto" />
          <h6 className="text-lg font-semibold">No todo found!</h6>
        </div>
      )}
      {/* if has items on search  */}
      {search &&
        searchedTodos.length > 0 &&
        searchedTodos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      {/* if not searched  */}
      {!search &&
        todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
    </>
  );
}

export default TodoContainer;

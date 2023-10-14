import { UseAuth } from '../Context/todoContext';

function AddInput() {
  const { onSave } = UseAuth();
  return (
    <>
      <form
        className="w-10/12 lg:w-6/12 mx-auto bg-white rounded-md shadow-md p-3 flex items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const todo = e.target[0].value;
          onSave({ todo: todo, isCompleted: false });
          e.target[0].value = '';
        }}
      >
        <input
          type="text"
          className="border focus:border-gray-400 w-full transition-all duration-75 outline-none rounded-sm px-3 py-2"
          placeholder="Eg. watch jujutsu kaisen"
          required
        />
        <button className="px-6 py-2 bg-slate-400 rounded-sm text-white">
          Add
        </button>
      </form>
    </>
  );
}

export default AddInput;

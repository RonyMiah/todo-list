function AddInput() {
  return (
    <>
      <form className="w-10/12 lg:w-6/12 mx-auto bg-white rounded-md shadow-md p-3 flex items-center gap-4">
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

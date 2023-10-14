import { FcDocument } from 'react-icons/fc';

function SearchInput() {
  return (
    <>
      <div className="mt-5 w-10/12 lg:w-6/12 mx-auto bg-white rounded-md shadow-md p-3 flex flex-col items-center gap-4">
        <div className="w-full">
          <input
            type="text"
            className="border focus:border-gray-400 w-full transition-all duration-75 outline-none rounded-sm px-3 py-2"
            placeholder="Search"
          />
        </div>

        <div className="w-full grid grid-cols-1 max-h-80 overflow-y-auto border">
          <div className="text-center p-5">
            <FcDocument className="w-14 h-14 my-2 mx-auto" />
            <h6 className="text-lg font-semibold">No todos to show!</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchInput;

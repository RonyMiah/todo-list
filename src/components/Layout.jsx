import AddInput from './AddInput';
import SearchInput from './SearchInput';

function Layout() {
  return (
    <div className="bg-[#f4f5f9] bg-opacity-25 flex flex-col justify-center items-center h-screen w-full ">
      <div className="absolute w-full h-1/2 bg-slate-400 top-0 left-0 -z-10"></div>
      <AddInput />
      <SearchInput />
    </div>
  );
}

export default Layout;

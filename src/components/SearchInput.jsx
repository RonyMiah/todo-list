import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';

function SearchInput() {
  return (
    <div className="w-6/12 mx-auto mt-3">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <GoSearch className="text-green-300" />
        </InputLeftElement>
        <Input type="text" placeholder="Search" />
        <button className="p-2 bg-pink-600 ms-3 font-bold"> +Add</button>
      </InputGroup>
    </div>
  );
}

export default SearchInput;

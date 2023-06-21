import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (searchInput: string) => void
}

const SearchInput = ({onSearch}: Props) => {

    const ref = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value) 
    }} style={{ width: '100%'}}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={15} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

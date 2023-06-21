import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react'
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
    return (
        <Menu>
          <MenuButton
            _hover={{ bg: "gray.400" }}
            as={Button}
            rightIcon={<BsChevronDown />}
          >
            Order by: Relevance
          </MenuButton>
          <MenuList>
              <MenuItem>Relevance</MenuItem>
              <MenuItem>Date added</MenuItem>
              <MenuItem>Name</MenuItem>
              <MenuItem>Release date</MenuItem>
              <MenuItem>Score</MenuItem>
              <MenuItem>Popularity</MenuItem>
          </MenuList>
        </Menu>
      );
}

export default SortSelector

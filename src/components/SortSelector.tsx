import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react'
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSort: (sortOrder: string) => void
    sortBy: string
}

const SortSelector = ({onSort, sortBy}: Props) => {

    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ]

    return (
        <Menu>
          <MenuButton
            _hover={{ bg: "gray.400" }}
            as={Button}
            rightIcon={<BsChevronDown />}
          >
            Order by: {sortOrders.find(order => order.value === sortBy)?.label}
          </MenuButton>
          <MenuList>
              {sortOrders.map(order => <MenuItem onClick={() => onSort(order.value) } key={order.value} value={order.value}>{order.label}</MenuItem>)}
          </MenuList>
        </Menu>
      );
}

export default SortSelector

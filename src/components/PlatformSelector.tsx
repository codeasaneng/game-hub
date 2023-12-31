import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onClickPlatformSelector: (platoform: Platform) => void;
  filteredPlatform: Platform | null

}

const PlatformSelector = ({ onClickPlatformSelector, filteredPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        _hover={{ bg: "gray.400" }}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {filteredPlatform === undefined ? 'Platforms' : filteredPlatform?.name}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            as={Button}
            onClick={() => onClickPlatformSelector(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

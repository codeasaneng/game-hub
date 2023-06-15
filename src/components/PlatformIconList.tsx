import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface IconProps {
  plaforms: Platform[];
}

const PlatformIconList = ({ plaforms }: IconProps) => {
  const iconMap: { [key: string ] : IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack padding={2}>
      {plaforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"}>{platform.slug}</Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;

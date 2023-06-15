import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
          <Heading size="md">{game.name}</Heading>
          <Text>
            {game.description}
          </Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;

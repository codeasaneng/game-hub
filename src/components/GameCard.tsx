import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface GameProps {
  game: Game;
}

const imageNotAvailableLink = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fshenandoahcountyva.us%2Fbos%2Fboard-of-supervisors%2Fpicture-not-available-clipart-12%2F&psig=AOvVaw2C_y7flKEhrsWZWgILpM51&ust=1687426818980000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJiv5fWI1P8CFQAAAAAdAAAAABAE';

const GameCard = ({ game }: GameProps) => {
  return (
    <Card border={ '2px solid black'}>
      <Image src={game.background_image ? getCroppedImageUrl(game.background_image) : getCroppedImageUrl(imageNotAvailableLink)} />
      <CardBody>
        <Heading fontSize="2xm" size="md">
          {game.name}
        </Heading>
        <Divider />
        <HStack justifyContent="space-between">
          <PlatformIconList
            plaforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

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
import noImagePlaceHolder from "../assets/no-image-placeholder-6f3882e0.webp"

interface GameProps {
  game: Game;
}

const imageNotAvailableLink = 'https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg';

const GameCard = ({ game }: GameProps) => {
  return (
    <Card border={ '2px solid black'}>
      <Image src={game.background_image ? getCroppedImageUrl(game.background_image) : noImagePlaceHolder} />
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

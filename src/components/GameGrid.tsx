import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCArdContainer";
import GameCardSkeleton from "./SkeletonGameCard";
import { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  filterGenre: Genre | null;
  filterPlatform: Platform | null;
}

const GameGrid = ({ filterGenre, filterPlatform }: Props) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: filterGenre?.id,
        platforms: filterPlatform?.id,
      },
    },
    [filterGenre?.id, filterPlatform?.id]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={5}
        mr={"10px"}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game: Game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

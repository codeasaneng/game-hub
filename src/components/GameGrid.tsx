import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCArdContainer";
import GameCardSkeleton from "./SkeletonGameCard";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  filterGenre: Genre | null;
  filterPlatform: Platform | null;
}

const GameGrid = ({ filterGenre, filterPlatform }: Props) => {
  const { data, error, isLoading } = useGames(filterGenre, filterPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      {error && <Text>{error}</Text>}
      <Box overflow="auto" maxHeight="700px">
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          spacing={3}
          paddingRight={10}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data && data.map((game: Game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
          {data.length === 0 && 
            <p>No games available matching</p>
          }
        </SimpleGrid>
      </Box>
    </>
  );
};

export default GameGrid;

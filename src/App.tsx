import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  searchText: string | null;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '400px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem padding={4} area="aside">
          <GenresList selectedGenre={gameQuery.genre} onClickGenre={(genre) => setGameQuery({...gameQuery, genre})} />
        </GridItem>
      </Show>
      <GridItem padding={4} area="main">
        <Heading padding={4}>{gameQuery.genre?.name} Games</Heading>
        <HStack spacing={5} marginBottom={5}>
          <PlatformSelector
            onClickPlatformSelector={(platform) =>
              setGameQuery({...gameQuery, platform})
            }
            filteredPlatform={gameQuery.platform}
          />
          <SortSelector sortBy={gameQuery.order} onSort={(order) => setGameQuery({...gameQuery, order})}/>
        </HStack>
        <GameGrid
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

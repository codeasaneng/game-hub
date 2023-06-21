import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
        <NavBar />
      </GridItem>
      <Show above="lg">ß
        <GridItem padding={4} area="aside">
          <GenresList onClickGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem padding={4} area="main">
        <Heading padding={4}>{selectedGenre?.name} Games</Heading>
        <HStack>
          <PlatformSelector
            onClickPlatformSelector={(platform) =>
              setSelectedPlatform(platform)
            }
          />
          <PlatformSelector
            onClickPlatformSelector={(platform) =>
              setSelectedPlatform(platform)
            }
          />
        </HStack>
        <GameGrid
          filterGenre={selectedGenre}
          filterPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

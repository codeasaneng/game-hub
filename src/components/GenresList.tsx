import {
    Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
    onClickGenre: (genre: Genre) => void
}

const GenresList = ({onClickGenre}: Props) => {
  const { data, error, isLoading } = useGenres()
  return (
    <>
      <Heading padding={4}>Genres</Heading>
      <Box overflow="auto" maxHeight="700px">
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} padding={'8px'}>
              <HStack justifyContent="flex-start" >
                <Image mr={2} boxSize="50px" src={genre.image_background} borderRadius={8} />
                <Button onClick={() => onClickGenre(genre)} variant={"link"} fontSize="20px">
                  {genre.name}
                </Button>
              </HStack>
          </ListItem>
        ))}
      </List>
      </Box>

    </>
  );
};

export default GenresList;

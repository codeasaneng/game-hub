import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";

interface Props {
    onClickGenre: (genre: Genre) => void
}

const GenresList = ({onClickGenre}: Props) => {
  const { data, error, isLoading } = useData<Genre>("/genres");
  return (
    <>
      <Heading padding={4}>Genres</Heading>
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
    </>
  );
};

export default GenresList;

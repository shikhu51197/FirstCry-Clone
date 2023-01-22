import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Button,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import { DeleteIcon } from '@chakra-ui/icons';

export default function Shortlistproductcard({id,image,title,mrp,price,removeitemshortlist}) {
  const [liked, setLiked] = useState(false);

  return (
    <Center minW={"0"} py={6}>
      <Box
        w="100%"
        height={"420px"}
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="rgb(166,171,183)">
        <Box h={'200px'}>
          <Img
            src={image}
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="100%"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box
            bg="white"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text color="black" fontSize={'xs'} fontWeight="bold">
             {title}
            </Text>
          </Box>
          <Text textDecorationLine={"line-through"} color={'gray.500'} noOfLines={2}>
          MRP:-₹{mrp}
          </Text>
          <Heading color={'black'} fontSize={'md'} noOfLines={1}>
           Price:-₹{price}
          </Heading>
        </Box>
        <HStack color="black">
        <Button onClick={()=>removeitemshortlist(id)} color="rgb(255,112,67)" backgroundColor={"white"} padding={"5px"} width={"300px"}><Text paddingRight={"5px"} textAlign={"left"}>Move to Cart</Text><DeleteIcon color={"rgb(255,112,67)"} /></Button>
          {/* <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex> */}
        </HStack>
      </Box>
    </Center>
  );
}
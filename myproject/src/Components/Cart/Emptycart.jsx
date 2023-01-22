import { Box,Image,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import emptycart from "../../assest/emptycart.gif"
export default function Emptycart(){
    return (
        <Box  backgroundColor={"white"} gap={"20px"} width={"100%"} margin="auto"  display="flex" flexDirection={"Column"} justifyContent="center" >
            <Image src={emptycart} width="40%" margin="auto"  />
            <Text textAlign={"center"} fontWeight={"bold"} fontSize="22px" textColor={"rgb(255,112,67)"} >Cart Empty!</Text>
            <Text textAlign={"center"} color="blue"><Link to="/" >Go to Homepage</Link></Text>
        </Box>
    )
}
import { Box,Image,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import emptycart from "../../assest/heartgif.png"
export default function Emptyshortlist(){
    return (
        <Box  backgroundColor={"white"} gap={"20px"} width={{base:"100px",sm:"100%",md:"500px",lg:"300%"}} margin="auto"  display="flex" flexDirection={"Column"} alignItems="center" justifyContent="center" >
            <Image src={emptycart} width="40%" margin="auto"  />
            <Text fontWeight={"bold"} fontSize="22px" textColor={"rgb(255,112,67)"} >No Product Shortlisted yet!</Text>
            <Text color="blue"><Link to="/" >Go to Homepage</Link></Text>
        </Box>
    )
}
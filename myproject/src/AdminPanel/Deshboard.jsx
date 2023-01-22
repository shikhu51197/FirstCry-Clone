import { Image , Box } from '@chakra-ui/react'
import React from 'react'
import img from '../assest/dashboard.png'
import gif from '../assest/gif.gif'

const Deshboard = () => {
  return (
    <div>
      <Box align ="right">
        <Image w="60%" margin="auto" box-shadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" border="2px solid black" borderRadius={30} src={img} mt={100} mr={40}/>
        <Image w="60%" margin="auto" box-shadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" border="2px solid black" borderRadius={30} src={gif} mt={100} mr={40}/>

      </Box>
    </div>
  )
}

export default Deshboard

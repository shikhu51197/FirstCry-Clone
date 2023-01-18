import React from 'react'

import Payment from './Payment';
import { Showdelivery } from './Showdelivery';
import {Box} from "@chakra-ui/react"

const Cart = () => {
  return (
    <>
   

   <Box display="flex" w="fit-content" align="center" m="auto" h={100} ml={10} mt={200} border="1px solid black">
   <Box mt={5} pl={2}>
<Showdelivery />
</Box>
<Box pl={5} pr={2} mt={5}>
<Payment /></Box>
</Box>

    
    </>
  )
}

export default Cart

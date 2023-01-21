import React,{useState} from 'react'
import AdminSide from './AdminSide';
import AdminNavbar from './AdminNavbar';
// import AdminFooter from './AdminFooter';
import AdminProduct from './AdminProduct';
import Delivery from './Delivery';
import Delete from './Delete';
import {
  Box,
  
} from "@chakra-ui/react";


const Admin = () => {
  const [showPage , setShowPage] = useState("AdminProduct")
  return (
    <div>
       <AdminNavbar setShowPage={setShowPage}/>
       <Box>
        <Box>
          <AdminSide/>
        </Box>
        <Box>
        {showPage == "AdminProduct" ? <AdminProduct /> : null}
        {showPage == "Delivery" ? <Delivery /> : null}
        {showPage == "Delete" ? <Delete/> : null}
        </Box>
       </Box>
      
      
      {/* <AdminFooter/> */}
    </div>
  )
}

export default Admin

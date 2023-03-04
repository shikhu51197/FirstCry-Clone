import React, { useState } from "react";
import AdminSide from "./AdminSide";
import AdminNavbar from "./AdminNavbar";
import AdminProduct from "./AdminProduct";
import Delivery from "./Delivery";
import Delete from "./Delete";
import { Box } from "@chakra-ui/react";
import Deshboard from "./Deshboard";
import OrderManagement from "./OrderManagement";
import UserManagement from "./UserManagement";

const Admin = () => {
  const [showPage, setShowPage] = useState("Deshboard");
  return (
    <div>
      <AdminNavbar setShowPage={setShowPage} />
      <Box>
        <Box>
          <AdminSide setShowPage={setShowPage} />
        </Box>
        <Box>
          {showPage == "Deshboard" ? <Deshboard /> : null}
          {showPage == "OrderManagement" ? <OrderManagement /> : null}
          {showPage == "UserManagement" ? <UserManagement /> : null}

          {showPage == "AdminProduct" ? <AdminProduct /> : null}
          {showPage == "Delivery" ? <Delivery /> : null}
          {showPage == "Delete" ? <Delete /> : null}
        </Box>
      </Box>

      {/* <AdminFooter/> */}
    </div>
  );
};

export default Admin;

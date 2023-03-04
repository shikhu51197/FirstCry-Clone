import React from "react";
import "./FristNav.css";
import { BsFillCartFill } from "react-icons/bs";
import {  Icon } from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";
import Searchinput from "../Components/Searchinput";
import { Link } from "react-router-dom";
import Adminlogin from "../AdminPanel/Adminlogin";
import logo from "../assest/Kids fashion logo.png";
function FristNav() {
  return (
    <>
      <div style={{ width: "100%", bg: "#ffffff" }} className="allcontainer">
        <div className="leftsidecontnav">
          <Link to="/"><img className="logo1" src={logo} alt="img" /></Link>
        </div>
        <div style={{ marginLeft: "20px" }} className="RC">
          <Searchinput />
        </div>

        <div className="rightsidecontnav">
          <Icon className="IC" mt={1} fontSize="20px">
            <CiLocationOn />
          </Icon>
          <Link to={`/account`}>
            <p>My Account |</p>
          </Link>

         <Adminlogin/> 
          <Link to={"/login"}>
            <p style={{ cursor: "pointer" }}>Login /Register | </p>
          </Link>

          <Link to={"/cart"}>
            <p style={{ cursor: "pointer" }}>Cart</p>
          </Link>
          <Icon className="IC" fontSize="20px">
            <BsFillCartFill />
          </Icon>
        </div>
      </div>
    </>
  );
}

export default FristNav;

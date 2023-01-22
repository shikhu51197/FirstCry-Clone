<<<<<<< HEAD
import React from 'react';
import "./FristNav.css"
import {MdOutlineScreenSearchDesktop} from "react-icons/md"
import {BsFillCartFill} from "react-icons/bs"
 import { Input,Icon } from '@chakra-ui/react'
import {CiSearch} from "react-icons/ci"
import { useRef } from 'react';
import {CiHeart} from "react-icons/ci"
import {CiLocationOn} from "react-icons/ci"
import Searchbar from '../Components/Searchbar';
import { Link } from 'react-router-dom';
import Adminlogin from '../AdminPanel/Adminlogin';
=======
import React from "react";
import "./FristNav.css";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { Input, Icon } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { useRef } from "react";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Searchbar from "../Components/Searchbar";
import { Link } from "react-router-dom";
import Adminlogin from "../AdminPanel/Adminlogin ";
>>>>>>> 9d61b48431f2a9863da821ad4f89cbea0631bf85
function FristNav() {
  //    https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png
  let searchRef = useRef();

  return (
    <>
      <div style={{ width: "100%", bg: "#ffffff" }} className="allcontainer">
        <div className="leftsidecontnav">
          <img className="logo1" src="Kids fashion logo.png" alt="img" />
        </div>
        <div style={{ marginLeft: "20px" }} className="RC">
          <Searchbar />
        </div>

        <div className="rightsidecontnav">
          <Icon className="IC" mt={1} fontSize="20px">
            <CiLocationOn />
          </Icon>
          <Link to={`/account`}>
            <p>My Account |</p>
          </Link>

          <Adminlogin />

<<<<<<< HEAD
              
               </div>
         
            <div className='rightsidecontnav'>
                    
            <Icon className="IC" mt={1} fontSize="20px"><CiLocationOn/></Icon>
               <Link to={`/account`}>
                 <p>My Account |</p>
                 </Link>
                  
                 <Adminlogin/> |
               
                  {/* <Icon className="IC" mt={1} fontSize="20px"><CiHeart/></Icon>
    <p  style={{cursor:"pointer"}}> shortList |</p> */}
   
               <Link to={"/login"} >
                   <p  style={{cursor:"pointer"}}>Login /Register | </p>       
                   </Link>
                  
                   <Link to={"/cart"} >
                  <p style={{cursor:"pointer"}}>Cart</p>
                  </Link>
                  <Icon  className="IC" fontSize="20px"><BsFillCartFill/>
            </Icon>
           
            </div>
            </div> 
</>
        
    );
=======
          <Icon className="IC" mt={1} fontSize="20px">
            <CiHeart />
          </Icon>
          <p style={{ cursor: "pointer" }}> shortList |</p>

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
>>>>>>> 9d61b48431f2a9863da821ad4f89cbea0631bf85
}

export default FristNav;

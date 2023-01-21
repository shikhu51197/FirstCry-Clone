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
function FristNav() {
//    https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png
   let searchRef = useRef();

    return (
     <>
        <div style={{width:"100%",border:"1px solid blue",bg:"#ffffff"}} className="allcontainer">
            <div className='leftsidecontnav'>
<<<<<<< HEAD
                <img className='logo1' src="Kids fashion logo.png" alt="img"/></div>
                <div style={{marginLeft:"20px"}} className="RC">  <Input  display="flex" ref={searchRef} variant='outline' size="sm" placeholder='Search Category'/><Icon fontSize="20px"  ml={-7} mt={2}>
                <CiSearch/>
                </Icon>
=======
                <img  src="Kids fashion logo.png" alt="img"/></div>
                <div style={{marginLeft:"20px"}} className="RC">  
                <Searchbar />
>>>>>>> ed57c4e570e7641937a053261ee4512d3823806a
              
               </div>
         
            <div className='rightsidecontnav'>
                    
            <Icon className="IC" mt={1} fontSize="20px"><CiLocationOn/></Icon>
                  <p>Stores & Preschools  |</p>
                  <p>Support | </p>
                  <p>Track Order | </p>
                  <p>Admin | </p>
                 
                  <Icon className="IC" mt={1} fontSize="20px"><CiHeart/></Icon>
    <p  style={{cursor:"pointer"}}> shortList |</p>
   
                 
                   <p  style={{cursor:"pointer"}}>Login /Register | </p>       

                  
                 
                  <p style={{cursor:"pointer"}}>Cart</p>
                  <Icon  className="IC" fontSize="20px"><BsFillCartFill/>
            </Icon>
            </div>
            </div> 
</>
        
    );
}

export default FristNav;
import Navbar from "./Navbarcart";
import Payment from "./Payment";
import { Showdelivery } from "./Showdelivery";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Emptycart from "./Emptycart";
import Emptyshortlist from "./Emptyshortlist";
import Cartproductcard from "./Cartproductcard";
import Shortlistproductcard from "./Shortlistproductcard";
import { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";


export default function Cart(){
    const [price,setprice]=useState(0);
    const handlequantity=(value,id)=>{
      const updatedData = cartdata.map((item) =>
      item.id === id ? {...item, quantity: item.quantity + value } : item
    );
    localStorage.setItem("cartdata",JSON.stringify(updatedData))
    window.location.reload();
    }
    let cartdata=JSON.parse(localStorage.getItem("cartdata"))||[];
    let shortlistdata=JSON.parse(localStorage.getItem("shortlistdata"))||[]; 
    useEffect(()=>{
      let tempprice=cartdata.length>0&&cartdata.reduce((acc, item) => {
        return (acc += item.quantity * Number(item.price));
      }, 0)
      setprice(tempprice);
    },[cartdata,shortlistdata,handlequantity])
 console.log("price",price)
    const removeitem=(id)=>{
      const updatedData = cartdata.filter((el)=>{
        return el.id!==id;
      })
      localStorage.setItem("cartdata",JSON.stringify(updatedData));
      window.location.reload();
    }
    const removeitemshortlist=(id)=>{
      const updatedData = shortlistdata.filter((el)=>{
        return el.id!==id;
      })
      const temp2 = shortlistdata.filter((el)=>{
        return el.id==id;
      })
      localStorage.setItem("shortlistdata",JSON.stringify(updatedData));
      localStorage.setItem("cartdata",JSON.stringify([...cartdata,temp2[0]]))
      window.location.reload();
    }
     return (
      <Box height="auto" backgroundColor="rgb(250,250,250)" >
        <Navbar />
        <Box backgroundColor={"rgb(239,238,241)"} display={"flex"} margin="auto" flexDirection={{base:"column",sm:"column",lg:"row"}} width={"60%"} justifyContent="space-between"  ><Showdelivery width="60%" position={"fixed"}  /><Payment price={price} /></Box>
        <Tabs backgroundColor={"white"} variant='enclosed' width={"60%"}  margin={"auto"} >
              <TabList>
                <Tab>Shopping Cart</Tab>
                <Tab>My Shortlist</Tab>
              </TabList>
              <TabPanels>
                <TabPanel display={"flex"} flexDirection="column" alignItems={"self-start"} justifyContent={"left"}  >
                 {cartdata&&cartdata.length==0?<Emptycart />: cartdata&&cartdata.length>0&&cartdata.map((el)=>(
                    <Cartproductcard removeitem={removeitem} handlequantity={handlequantity} key={el.id} {...el} />
                   )) }
                </TabPanel>
                <TabPanel alignItems={"center"} justifyContent={"center"} display={"grid"} gap="10px" gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}}>
                {shortlistdata&&shortlistdata.length==0?<Emptyshortlist />: shortlistdata&&shortlistdata.length>0&&shortlistdata.map((el)=>(
                    <Shortlistproductcard removeitemshortlist={removeitemshortlist} key={el.id} {...el} />
                   )) }
                </TabPanel>
              </TabPanels>
        </Tabs>
      </Box>
     )
}
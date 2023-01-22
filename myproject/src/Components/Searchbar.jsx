import React, { useState } from "react";
import {InputGroup,Input,InputRightElement,Menu,MenuItem,MenuList,MenuButton,BoxProps,Box,forwardRef} from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { useEffect } from "react";
import { useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from "../Redux/AppReducer/action";
import { useNavigate } from "react-router-dom";
export default function Searchbar() {
    const [input,setinput]=useState("");
  const [suggestions,setsuggestions]=useState([]);
  const [data,setdata]=useState([]);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [focus,setfocus]=useState(false);
  const getdata=()=>{
       axios.get(`https://burgundy-cow-kit.cyclic.app/MenKids`)
    .then((res)=>setdata([...data,...res.data]))
    axios.get(`https://burgundy-cow-kit.cyclic.app/GirlKids `)
    .then((res)=>setdata([...data,...res.data]))
    axios.get(`https://burgundy-cow-kit.cyclic.app/Footwear  `)
    .then((res)=>setdata([...data,...res.data]))
  }
  useEffect(()=>{
      getdata();
  },[])
  useEffect(()=>{
    if(input===""){
        setsuggestions([]);
      }else{
        let textquery=input.trim().toLowerCase();
        let newsuggestions=data.filter((item)=>{
          return item.title.toLowerCase().indexOf(textquery)!==-1?true:false;
        }).map((item)=>item.title)
        setsuggestions(newsuggestions.slice(0,7));
      }
  },[input])
  const [activeoption,setactiveoption]=useState(1);
    const scrolldiv=useRef();
    const ref=useRef(null);
    const handleactive=(e)=>{
        //down arrow=40
        //upward arrow=38
        if(e.keyCode===40){
            if(activeoption===suggestions.length){
                setactiveoption(0);
            }
            setactiveoption((pre)=>pre+1);
        }
        if(e.keyCode===38){
            if(activeoption===1){
                setactiveoption(suggestions.length);
            }else{
            setactiveoption((pre)=>pre-1);}
        }
        //for enter//
        if(e.keyCode===13){
            setfocus(false)
            dispatch(getProducts({q:input}))
            .then(()=>{
                navigate("/products")
            })
        }
    }
    let prod=useSelector((store)=>store.AppReducer.product);
    console.log("prodinput",prod)
    console.log(suggestions[activeoption-1]);
    const handleclicksuggestion=()=>{
        dispatch(getProducts({q:suggestions[activeoption].trim()}))
        .then(()=>{
            navigate("/products")
        })
    }
    return (
     
    <Wrapper onKeyDown={handleactive} >
            <Searchbarwrapper>
              <Inputbox onBlur={() => setfocus(false)} onFocus={() => setfocus(true)} ref={ref} placeholder="search..." value={input} onChange={(e)=>setinput(e.target.value)} >
              </Inputbox>
              <SearchIcon margin={"10px"} onClick={()=>{ setfocus(false);dispatch(getProducts({q:input}))}} color={"black"} ml={-7}cursor={"pointer"} />
            </Searchbarwrapper>
            <Suggestionbox limit={5} suggestionslength={suggestions.length} activeoption={activeoption} ref={scrolldiv} >            
            {focus&&suggestions.map((item,index)=>{
                return <div onClick={()=>handleclicksuggestion} onMouseOver={()=>setactiveoption(index+1)} key={index}>{item}</div>
            })}
            </Suggestionbox>

        </Wrapper>
    )
  }


  const Searchbarwrapper=styled.div`
display:flex;
align-items:center;
justify-content:center;
width:340px;
` 
const Inputbox=styled.input`
flex:1;
font-size:20px;
padding:0px 5px;
width:100%;
border:1px solid black;
`

const Suggestionbox=styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius: 0% 0% 5% 5%;
back-ground-color:white;
font-size: 12px;
width:300px;
max-height: auto;
overflow:auto;
display: block;
position:absolute;
z-index:10;
background:white;
& * {
    padding:10px;
    text-align:left;
}
& :nth-child(${({activeoption})=>activeoption}){
    background:rgb(0,0,0,0.1);
    cursor:pointer;
}
`

const Wrapper=styled.div`
max-width:350px;
margin:auto;
`
 
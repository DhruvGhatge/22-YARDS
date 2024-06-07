'use client'
import { LuArrowLeft } from "react-icons/lu";
import Navbar from "../Component/Navbar"
import Cards from './cards';
import MatchCards from "./MatchCards"
import Members from "./Members"

import Profile from "./Profile"

import { useState, ReactElement, ComponentType } from 'react';
import { useRouter } from "next/navigation";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Button } from "@/components/ui/button"


  export default function TeamProfile(){
    const router=useRouter();
    const [activeComponent, setActiveComponent] = useState<ReactElement | null>(<Cards/>);
    const handleButtonClick = (component: ReactElement) => {
      setActiveComponent(component);
    };
    return(
    <>
    <title>my website</title>
   
       
      <Navbar></Navbar>  

<div style={{display: "flex", justifyContent: "space-between", marginLeft: "125px",
    marginRight: "650px", marginTop: "25px", alignItems: "center"}}>
    <div>
        <h2 style={{fontSize: "24px",display: "flex",
    alignItems: "center"}}><LuArrowLeft /> Back</h2>
    </div>
    <div style={{display: "fleX", justifyContent: "center"}}>
        <h1 style={{fontSize: "2.343vw"}}>Team Profile</h1>
    </div>
</div>
<div>
<div className="backgroundImage">
      <img src="image\teamProfilebanner.png" className="background" style={{borderRadius: "15px"}}></img>
      <img src="image\TN5.png" alt="" className="overlay"/>
      <div className="overlay-text"><h1>SC</h1></div>
      <div style={{marginTop: "25px", display: "flex", justifyContent: "space-between",
    alignItems: "center", marginRight: "70px"}}>
        </div></div><div className="menuitem">
      <div style={{ marginLeft: '70px' } }>

  <h1 style={{fontSize: "2.34vw"}}>Shivoham CC</h1>

  </div>

  <Menubar className="menu" style={{borderWidth:'0px', fontSize: "100px"}}>
  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick(<Cards />)}>Info</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick(<MatchCards />)} >Matches</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick(<Profile />)}>Profile</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick(<Members/>)}>Members</MenubarTrigger>
  </MenubarMenu>

  </Menubar>
</div>
      </div>
      <div>{activeComponent}</div>


</>

    )
}

'use client'
import { useState, ReactElement, ComponentType } from 'react';
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

import Navbar from "../Component/Navbar";
export default function PlayerProfile(){
    const [activeComponent, setActiveComponent] = useState<ReactElement | null>(<></>);
    const handleButtonClick = (component: ReactElement) => {
      setActiveComponent(component);
    };
    return(
              <><Navbar></Navbar>
              <div style={{display: "flex", justifyContent: "space-between", marginLeft: "125px",
    marginRight: "650px", marginTop: "25px", alignItems: "center"}}>
   
    <div style={{display: "fleX", justifyContent: "center"}}>
        <h1 style={{fontSize: "2.343vw"}}>Team Profile</h1>
    </div>
</div>
<div>
<div className="backgroundImage">
      <img src="image\teamProfilebanner.png" className="background" style={{borderRadius: "15px"}}></img>
      <img src="image\praveenkumar.jpg" alt="" className="overlay" height={100}/>
      
      <div style={{marginTop: "25px", display: "flex", justifyContent: "space-between",
    alignItems: "center", marginRight: "70px"}}>
        </div></div><div className="menuitem">
      <div style={{ marginLeft: '70px' } }>

  <h1 style={{fontSize: "2.34vw"}}>Praveen Kumar</h1>

  </div>

  <Menubar className="menu" style={{borderWidth:'0px', fontSize: "100px"}}>
  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick(<></>)}>Info</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick(<></>)} >Batting</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick(<></>)}>Bowling</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick(<></>)}>Fielding</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick(<></>)}>Matches</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick(<></>)}>Followers</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick(<></>)}>Following</MenubarTrigger>
  </MenubarMenu>

  </Menubar>
</div>
      </div>
      
              </>

    );
};
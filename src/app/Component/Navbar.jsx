"use client";
import styles from"./Navbar.module.css";

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
  import { LuChevronDown } from "react-icons/lu";


export default function Navbar(){
    return(
      <div className={styles.abc}>
          <div style={{ marginLeft: '20px'}}>
  <img src="\image\Main-Logo.png" alt="logo" style={{ maxWidth: '60px', height: '60px', borderRadius: '7px'}}  />
</div>

   
<Menubar className="menu" style={{borderWidth:'0px'}}>
  <MenubarMenu>
    <MenubarTrigger>Home</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Live Matches</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
       Practice Matches
      </MenubarItem>
      <MenubarItem>Tournament</MenubarItem>
       </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Ecosystem</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Grounds
      </MenubarItem>
      <MenubarItem>Scores</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Umpires</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Leaderboard</MenubarTrigger>
   </MenubarMenu>

   <MenubarMenu>
    <MenubarTrigger>Academy</MenubarTrigger>
   </MenubarMenu>

   <MenubarMenu>
    <MenubarTrigger>blog</MenubarTrigger>
   </MenubarMenu>

   <MenubarMenu>
    <MenubarTrigger>More<LuChevronDown /></MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
       Live Stream
      </MenubarItem>
      <MenubarItem>Contact Us</MenubarItem>
    </MenubarContent>
   </MenubarMenu>
   <MenubarMenu>
   <Button className="signin" variant="outline" style={{borderRadius:'24px', background:'#fff'}}>sign in</Button>
   </MenubarMenu>
</Menubar>
</div>
);
};
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  

  export default function nevbar(){
    return(
        <div className="abc">
          <div style={{ marginLeft: '20px' } }>
  <img src="image\logo.jpg" alt="logo" style={{ maxWidth: '10%', height: '20%' }}  />
</div>
        <Menubar className="menu">
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
    <MenubarTrigger>More</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
       Live Stream
      </MenubarItem>
      <MenubarItem>Contact Us</MenubarItem>
      
    </MenubarContent>
   </MenubarMenu>
</Menubar>
</div>
    )
}
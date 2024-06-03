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


  export default function nevbar(){
    return(
    <>
        <div className="abc">
          <div style={{ marginLeft: '20px' } }>
  <img src="image\Main-Logo.png" alt="logo" style={{ maxWidth: '60px', height: '60px', borderRadius: '7px'}}  />
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
    <MenubarTrigger>More</MenubarTrigger>
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
<div style={{display: "flex", justifyContent: "space-between", marginLeft: "125px",
    marginRight: "650px", marginTop: "25px", alignItems: "center"}}>
    <div>
        <h2 style={{fontSize: "24px"}}>Back</h2>
    </div>
    <div style={{display: "fleX", justifyContent: "center"}}>
        <h1 style={{fontSize: "2.343vw"}}>Team Profile</h1>
    </div>
</div>
<div className="backgroundImage">
   
      <img src="image\teamProfilebanner.png" className="background" style={{borderRadius: "15px"}}></img>
      <img src="image\TN5.png" alt="" className="overlay"/>
      <div style={{marginTop: "30px", display: "flex", justifyContent: "space-between",
    alignItems: "center", marginRight: "70px"}}>
      <div style={{ marginLeft: '70px' } }>
  <h1 style={{fontSize: "2.34vw"}}>Dhruv CC</h1>
  </div>

  <Menubar className="menu" style={{borderWidth:'0px', fontSize: "100px"}}>
  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}}>Info</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}}>Matches</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}}>Profile</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}}>Members</MenubarTrigger>
  </MenubarMenu>

  </Menubar>
</div>
      </div>

</>

    )
}
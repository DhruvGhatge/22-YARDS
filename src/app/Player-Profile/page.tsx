
'use client'
import StatsCard from './StatsCard';
import styles from './StatsCard.module.css';
import  Info  from './info';
import Matchcards from '../Team-Profile/MatchCards';
import { BsPersonFillAdd } from "react-icons/bs";
import { GiShare } from "react-icons/gi";
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
    const [activeComponent, setActiveComponent] = useState<ReactElement | null>(<Info/>);
    const handleButtonClick = (component: ReactElement) => {
      setActiveComponent(component);
    };

    const stats = [
        { label: 'Matches', value: 4 },
        { label: 'Runs', value: 101 },
        { label: 'Balls', value: 86 },
        { label: 'Highest', value: 39 },
        { label: 'Average', value: 33.67 },
        { label: 'SR', value: 117.44 },
        { label: 'Not Out', value: 1 },
        { label: 'Fours', value: 10 },
        { label: 'Sixes', value: 4 },
        { label: 'Duck', value: 0 },
        { label: '50s', value: 0 },
        { label: '100s', value: 0 },
        { label: '200s', value: 0 },
      ];

      const Bowling = [
        { label: 'Matches', value: 4 },
        { label: 'Runs', value: 101 },
        { label: 'Balls', value: 86 },
        { label: 'Wickets', value: 9 },
        { label: 'Maiden', value: 1 },
        { label: 'Average', value: 13.67 },
        { label: 'Eco', value: 6.32 },
        { label: '4w', value: 1 },
        { label: '5w', value: 10 },
        { label: '10w', value: 4 },
       
      ]

      const Fielding = [
        { label: 'Matches', value: 4 },
        { label: 'Runout', value: 2 },
        { label: 'Catches', value: 0 },
      ]
    
    return(
              <>
               <title>my website</title>
   
              <Navbar></Navbar>
              <div style={{display: "flex", justifyContent: "space-between", marginLeft: "125px",
    marginRight: "650px", marginTop: "25px", alignItems: "center"}}>
   
    <div style={{display: "fleX", justifyContent: "center", marginRight: "500px", marginLeft: "550px" }}>
        <h1 style={{fontSize: "2.343vw"}}>Profile</h1>
    </div>
</div>
<div>
<div className="backgroundImage">
      <img src="image\teamProfilebanner.png" className="background" style={{borderRadius: "15px"}}></img>
      <img src="image\praveenkumar.jpg" alt="" className="overlay" height={100} style={{borderRadius: "20px"}}/>
      <div className='socialbar'>
        <div>Followers 0</div>
        <div style={{display: "flex", alignItems: "center"}}>Follow <BsPersonFillAdd /></div>
        <div><GiShare /></div>
      </div>
      <div style={{marginTop: "25px", display: "flex", justifyContent: "space-between",
    alignItems: "center", marginRight: "70px"}}>
        </div></div><div className="menuitem">
      <div style={{ marginLeft: '70px' } }>

  <h1 style={{fontSize: "2.34vw", }}>Praveen Kumar</h1>
  <h1 style={{fontSize: "1.34vw", color: "#794C9F" }}>Thiruvallur</h1>

  </div>

  <Menubar className="menu" style={{borderWidth:'0px', fontSize: "100px"}}>
  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "20px"}} onClick={() => handleButtonClick(<Info />)}>Info</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "20px"}} onClick={() => handleButtonClick(<div className={styles.container}>
      <div className={styles.grid}>
        {stats.map((stat, index) => (
          <StatsCard key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>)} >Batting</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "20px"}} onClick={() => handleButtonClick(<div className={styles.container}>
      <div className={styles.grid}>
        {Bowling.map((stat, index) => (
          <StatsCard key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>)}>Bowling</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "20px"}} onClick={() => handleButtonClick(<div className={styles.container}>
      <div className={styles.grid}>
        {Fielding.map((stat, index) => (
          <StatsCard key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>)}>Fielding</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "20px"}} onClick={() => handleButtonClick(<Matchcards/>)}>Matches</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "20px"}} onClick={() => handleButtonClick(<div style={{marginRight: "150px", marginLeft: "150px", marginTop: "50px"}}><h1>Total Followers
0</h1></div>)}>Followers</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "20px"}} onClick={() => handleButtonClick(<div style={{marginRight: "150px", marginLeft: "150px", marginTop: "50px"}}><h1>Total Following
0</h1></div>)}>Following</MenubarTrigger>
  </MenubarMenu>

  </Menubar>
</div>
      </div>
      {activeComponent}
      
              </>

    );
};
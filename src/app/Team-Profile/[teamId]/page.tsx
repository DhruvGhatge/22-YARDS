'use client'
import { LuArrowLeft } from "react-icons/lu";
import Navbar from "../../Component/Navbar"
import Cards from './cards';
import MatchCards from "./MatchCards"
import Members from "./Members"
import MenubarComponent from "./DynamicMenubar"
import axios from '../../../utils/ajax';
import Profile from "./Profile"

import { useState, useEffect } from 'react';
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
    const [ComponentName, setComponentName] = useState<any>("info");
    const handleButtonClick = (component: any) => {
      setComponentName(component);
    };

    const [SessionalStats, setSessionalStats] = useState<any>(null)
    const [ConslidatedStats, setConslidatedStats] = useState<any>(null)
    const [ScoreCard, setScoreCard] = useState<any>(null)
    const [Profile, setProfile] = useState<any>(null)
    const [membersData, setMembers] = useState<any>(null)

    useEffect(() => {
      async function fetchData() {
        const response = await axios({
          url: `https://api.22yards.co.in/api/teams/sessionalStats/5da446374bdd3804cc815532`,
          method: 'GET'
        })
        setSessionalStats(response.data.response);
      }
      fetchData();
    }, []);

    useEffect(() => {
      async function fetchData() {
        const response = await axios({
          url: `https://api.22yards.co.in/api/teams/conslidatedStats/5da446374bdd3804cc815532`,
          method: 'GET'
        })
        setConslidatedStats(response.data.response);
      }
      fetchData();
    }, []);

    useEffect(() => {
      async function fetchData() {
        const response = await axios({
          url: `https://api.22yards.co.in/api/web/scorer?type=team&playerId=60e2cbd04a40f60e76a6ba25&pageNo=1&pageSize=10&teamId=5da446374bdd3804cc815532`,
          method: 'GET'
        })
        setScoreCard(response.data.response);
      }
      fetchData();
    }, []);

    useEffect(() => {
      async function fetchData() {
        const response = await axios({
          url: `https://api.22yards.co.in/api/teams/members/5da446374bdd3804cc815532/60e2cbd04a40f60e76a6ba25`,
          method: 'GET'
        })
        setMembers(response.data.response);
      }
      fetchData();
    }, []);

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
      <img src="\image\teamProfilebanner.png" className="background" style={{borderRadius: "15px"}}></img>
      <img src="\image\TN5.png" alt="" className="overlay"/>
      <div className="overlay-text"><h1>SC</h1></div>
      <div style={{marginTop: "25px", display: "flex", justifyContent: "space-between",
    alignItems: "center", marginRight: "70px"}}>
        </div></div><div className="menuitem">
      <div style={{ marginLeft: '70px' } }>

  <h1 style={{fontSize: "2.34vw"}}>Shivoham CC</h1>

  </div>

  <Menubar className="menu" style={{borderWidth:'0px', fontSize: "100px"}}>
  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick("info")}>Info</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick("matches")} >Matches</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick("profile")}>Profile</MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger style={{fontSize: "30px"}} onClick={() => handleButtonClick("members")}>Members</MenubarTrigger>
  </MenubarMenu>

  </Menubar>
</div>
      </div>
      <MenubarComponent ComponentName={ComponentName} SessionalStats={SessionalStats} ConslidatedStats={ConslidatedStats} ScoreCard={ScoreCard} membersData={membersData}></MenubarComponent>
</>

    )
}
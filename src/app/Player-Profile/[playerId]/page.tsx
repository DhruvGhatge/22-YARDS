
'use client'
import StaticComponent from './staticComponent';
import { BsPersonFillAdd } from "react-icons/bs";
import { GiShare } from "react-icons/gi";
import { useState, ReactElement, ComponentType, useEffect } from 'react';
import MenubarComponent from "./DynamicMenubar"
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

import Navbar from "../../Component/Navbar";
import axios from '../../../utils/ajax';

export default function PlayerProfile({ params }: { params: { playerId: string } }) {
  console.log("this is playerId", params.playerId)
  const [apiData, setApiData] = useState<any>(null);
  const [name, setname] = useState<any>('info');
  const handleButtonClick = (Name: any) => {
    setname(Name);
  };

  const [BattingData, setBattingData] = useState<any>(null);

  

  const [BowlingData, setBowlingData] = useState<any>(null);

  

  const [FieldingData, setFieldingData] = useState<any>(null);

  const [MatchData, setMatchData] = useState<any>(null);

  

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: `https://api.22yards.co.in/api/web/player/publicInfo/60e2cbd04a40f60e76a6ba25/${params.playerId}`,
        method: 'GET'
      })
      setApiData(response.data.response);

    }
    fetchData();
  }, []);

 

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: `https://api.22yards.co.in/api/web/scorer/playerBattingStats/${params.playerId}`,
        method: 'GET'
      })
      setBattingData(response.data.response);

    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: `https://api.22yards.co.in/api/web/scorer/playerBowlingStats/${params.playerId}`,
        method: 'GET'
      })
      setBowlingData(response.data.response);

    }
    fetchData();
  }, []);



  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: `https://api.22yards.co.in/api/web/scorer/playerFieldingStats/${params.playerId}`,
        method: 'GET'
      })
      setFieldingData(response.data.response);

    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: `https://api.22yards.co.in/api/web/scorer?type=player&playerId=6117cebda707b71f42d7ac6a&pageNo=1&pageSize=30`,
        method: 'GET'
      })
      setMatchData(response.data.response);
    }
    fetchData();
    console.log(MatchData);
  }, []);

  return (

    <>
      <title>my website</title>

      <Navbar></Navbar>
      <div style={{
        display: "flex", justifyContent: "space-between", marginLeft: "125px",
        marginRight: "650px", marginTop: "25px", alignItems: "center"
      }}>

        <div style={{ display: "fleX", justifyContent: "center", marginRight: "500px", marginLeft: "550px" }}>
          <h1 style={{ fontSize: "2.343vw" }}>Profile</h1>
        </div>
      </div>
      <div>
        <div className="backgroundImage">
          <img src="\image\teamProfilebanner.png" className="background" style={{ borderRadius: "15px" }}></img>
          <img src="\image\praveenkumar.jpg" alt="" className="overlay" height={100} style={{ borderRadius: "20px" }} />
          <div className='socialbar'>
            <div>Followers 0</div>
            <div style={{ display: "flex", alignItems: "center" }}>Follow <BsPersonFillAdd /></div>
            <div><GiShare /></div>
          </div>
          <div style={{
            marginTop: "25px", display: "flex", justifyContent: "space-between",
            alignItems: "center", marginRight: "70px"
          }}>
          </div></div><div className="menuitem">
          <div style={{ marginLeft: '70px' }}>

            <h1 style={{ fontSize: "2.34vw", }}>{apiData?apiData.name: "---"}</h1>
            <h1 style={{ fontSize: "1.34vw", color: "#794C9F" }}>{apiData?apiData.location: "---"}</h1>

          </div>

          <Menubar className="menu" style={{ borderWidth: '0px', fontSize: "100px" }}>
            <MenubarMenu>
              <MenubarTrigger style={{ fontSize: "20px" }} onClick={() => handleButtonClick('info')}>Info</MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger style={{ fontSize: "20px" }} onClick={() => handleButtonClick('batting')} >Batting</MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger style={{ fontSize: "20px" }} onClick={() => handleButtonClick('bowling')}>Bowling</MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger style={{ fontSize: "20px" }} onClick={() => handleButtonClick('fielding')}>Fielding</MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger style={{ fontSize: "20px" }} onClick={() => handleButtonClick('matches')}>Matches</MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger style={{ fontSize: "20px" }} onClick={() => handleButtonClick('followers')}>Followers</MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger style={{ fontSize: "20px" }} onClick={() => handleButtonClick('following')}>Following</MenubarTrigger>
            </MenubarMenu>

          </Menubar>
        </div>
      </div>
     <MenubarComponent ComponentName={name} Batting={BattingData} Bowling={BowlingData} Fielding={FieldingData} InfoData={apiData} matchCard={MatchData}/>
      

    </>
  );
};

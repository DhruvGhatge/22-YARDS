import React from 'react';
import dynamic from 'next/dynamic';
import Info from './info';
import StatsCard from './StatsCard';
import dynamicType from './dynamicType';
import Matchcards from '../../Team-Profile/[teamId]/MatchCards';
import styles from './StatsCard.module.css';



const MenubarComponent = ({
  ComponentName,

  Batting,
  Bowling,
  Fielding,
  InfoData
}) => {
  const keysofbatting = [
    "matches", "runs", "balls", "hs", "avg", "sr", 
    "notOut", "fours", "sixes", "duck", "fifty", 
    "hundred", "twohundred"
  ];

  const keyLabelBatting = {
    matches: "Matches",
    runs: "Runs",
    balls: "Balls",
    hs: "Highest Score",
    sr: "sr",
    avg: "Average",
   fours: "4s",
   sixes: "4w",
   duck: "5w",
   fifty: "10w",
   hundred: "100s",
   twohundred: "200s",
   notOut: "Not Out"
  };


  const keysofBowling = [
    "matches", "runs", "balls", "wickets", "maidens", 
    "avg", "economy", "fourWicket", "fiveWicket", "tenWicket" 
  ];

  const keyLabelBowling = {
    matches: "Matches",
    runs: "Runs",
    balls: "Balls",
    wickets: "Wickets",
    maidens: "Maidens",
    avg: "Average",
    economy: "Economy",
    fourWicket: "4w",
    fiveWicket: "5w",
    tenWicket: "10w",
  };

  const keysofFielding = [
    "matches", "runout", "catch"
  ];

  const keyLabelFielding = {
    matches: "Matches",
    runout: "Runout",
    catch: "Catches"
  };

  if (ComponentName) {
    switch (ComponentName) {
      case dynamicType.info:
        return (
         <Info data={InfoData} />
        );

      case dynamicType.batting:

        return (
          <div className={styles.container}>
          <div className={styles.grid}>
           
            {Batting ? (
              Object.entries(Batting)
                .filter(([key, value]) => keysofbatting.includes(key))
                .map(([key, value], index) => (
                  <StatsCard key={index} label={keyLabelBatting[key] || key}  value={value} />
                ))
            ) : ("-")}
          </div>
        </div>
        );

      case dynamicType.bowling:
        return (
          <div className={styles.container}>
          <div className={styles.grid}>
            
            {Bowling ? (
              Object.entries(Bowling)
                .filter(([key, value]) => keysofBowling.includes(key))
                .map(([key, value], index) => (
                  <StatsCard 
                    key={index} 
                    label={keyLabelBowling[key] || key} 
                    value={value} 
                  />
                ))
            ) : (
              "-"
            )}
          </div>
        </div>
        );

      case dynamicType.fielding:
        return (
           
                 <div className={styles.container}>
      <div className={styles.grid}>
        
        {Fielding ? (
          Object.entries(Fielding)
            .filter(([key, value]) => keysofFielding.includes(key))
            .map(([key, value], index) => (
              <StatsCard 
                key={index} 
                label={keyLabelFielding[key] || key} 
                value={value} 
              />
            ))
        ) : (
          "-"
        )}
      </div>
    </div>
        );


      case dynamicType.matches:
        return(
            <Matchcards />
        );

      case dynamicType.followers:
        return (
            <div style={{ marginRight: "150px", marginLeft: "150px", marginTop: "50px" }}><h1>Total Followers
                0</h1></div>
        );

      case dynamicType.following:
        return(<div style={{ marginRight: "150px", marginLeft: "150px", marginTop: "50px" }}><h1>Total Following
        0</h1></div>);

        default:
            return null;
        }
      }
    
      return null;
    };
    
    export default MenubarComponent;
    
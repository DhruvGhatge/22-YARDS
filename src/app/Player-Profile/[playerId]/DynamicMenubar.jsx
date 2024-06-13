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
  if (ComponentName) {
    switch (ComponentName) {
      case dynamicType.info:
        return (
         <Info Data={InfoData} />
        );

      case dynamicType.batting:
        return (
            <div className={styles.container}>
            <div className={styles.grid}>
              {Batting.map((stat, index) => (
                <StatsCard key={index} label={stat.label} value={stat.value} />
              ))}
            </div>
          </div>
        );

      case dynamicType.bowling:
        return (
            <div className={styles.container}>
                <div className={styles.grid}>
                  {Bowling.map((stat, index) => (
      
      
                    <StatsCard key={index} label={stat.label} value={stat.value} />
                  ))}
                </div>
              </div>
        );

      case dynamicType.fielding:
        return (
            <div className={styles.container}>
                <div className={styles.grid}>
                  {Fielding.map((stat, index) => (
                    <StatsCard key={index} label={stat.label} value={stat.value} />
                  ))}
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
    
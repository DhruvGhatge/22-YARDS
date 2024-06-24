// Matchcard.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './matchcard.module.css';
import { FaLocationDot } from "react-icons/fa6";

const Matchcard = ({ match }) => {
  console.log(match);
  const date = new Date(match[1].matchDateTime);
  const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (

    <div className={styles.card}>
      <div className={styles.cardHeaderGreen}>
        <div className={styles.headerLeft}>
          <div>{match.date}</div>
          <div>SCOREBOOK</div>
        </div>
        <div>{timeString}</div>
        <div>RESULT</div>
      </div>
      <div style={{background: "grey", color:"white"}}><h4 style={{marginLeft:"50px"}}>{match[1].matchResult}</h4></div>
      <div className={styles.cardBody}>
        <div className={styles.matchInfo}>
          <div className={styles.team}>
            <div className={styles.teamLogo}>{match[1].AteamShortName}</div>
            <div>{match[1].AteamName}</div>
          </div>
          <div className={styles.score}>{match[1].matchScore[0].totalRun}/{match[1].matchScore[0].totalWicket} ({match[1].matchScore[0].oversPlayed}/{match[1].matchScore[0].overs})</div>
        </div>
        <div className={styles.vs}>vs</div>
        <div className={styles.matchInfo}>
          <div className={styles.team}>
            <div className={styles.teamLogo}>{match[1].BteamShortName}</div>
            <div>{match[1].BteamName}</div>
          </div>
          <div className={styles.score}>{match[1].matchScore[1].totalRun}/{match[1].matchScore[1].totalWicket} ({match[1].matchScore[1].oversPlayed}/{match[1].matchScore[1].overs})</div>
        </div>
        <div className={styles.location}>
          <div><FaLocationDot /></div>
          <div>{match[1].ground}</div>
        </div>
      </div>
    </div>
  );
};

Matchcard.propTypes = {
  match: PropTypes.shape({
    date: PropTypes.string.isRequired,
    team1: PropTypes.shape({
      shortName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.string.isRequired,
    }).isRequired,
    team2: PropTypes.shape({
      shortName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Matchcard;
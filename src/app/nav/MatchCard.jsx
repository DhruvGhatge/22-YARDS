// Matchcard.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './matchcard.module.css';

const Matchcard = ({ match }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeaderGreen}>
        <div className={styles.headerLeft}>
          <div>{match.date}</div>
          <div>SCOREBOOK</div>
        </div>
        <div>RESULT</div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.matchInfo}>
          <div className={styles.team}>
            <div className={styles.teamLogo}>{match.team1.shortName}</div>
            <div>{match.team1.name}</div>
          </div>
          <div className={styles.score}>{match.team1.score}</div>
        </div>
        <div className={styles.vs}>vs</div>
        <div className={styles.matchInfo}>
          <div className={styles.team}>
            <div className={styles.teamLogo}>{match.team2.shortName}</div>
            <div>{match.team2.name}</div>
          </div>
          <div className={styles.score}>{match.team2.score}</div>
        </div>
        <div className={styles.location}>
          <div className={styles.locationIcon}></div>
          <div>{match.location}</div>
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
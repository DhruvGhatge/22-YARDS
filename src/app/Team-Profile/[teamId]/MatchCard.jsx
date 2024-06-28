// Matchcard.js
import React from 'react';
import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import styles from './matchcard.module.css'


const Matchcard = ({ match,teamMatchCard=false }) => {
  // console.log(match);
  const date = new Date(match[1].matchDateTime);
  const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (

    <div class="card">
    <div class="card-header">
        <div class="header-left">
            <span class="date">Fri, 22-Mar</span>
            <span class="time">10:00 PM</span>
        </div>
        <span class="result">Result</span>
    </div>
    <div class="card-content">
        <div class="match">
            <div class="team">
                <div class="team-logo team-logo-mb">MB</div>
                <div class="team-info">
                    <span class="team-name">Madras Bulldogs</span>
                    <span class="score">159/7 (20.0 Ov)</span>
                </div>
            </div>
            <div class="versus">vs</div>
            <div class="team">
                <div class="team-logo team-logo-gs">GS</div>
                <div class="team-info">
                    <span class="team-name">Game Swingers</span>
                    <span class="score">160/4 (18.1 Ov)</span>
                </div>
            </div>
        </div>
        <div class="location">
            <span class="location-icon">📍</span>
            <span>22yards - kcg floodlights ground omr, Chennai</span>
        </div>
    </div>
    <div class="card-footer">
        Game Swingers won by 6 wickets
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
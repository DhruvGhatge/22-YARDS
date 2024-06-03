
import styles from './Cards.module.css';

const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <div className={styles.cardHeaderYellow}>SEASONAL STATISTICS</div>
        <div className={styles.cardBody}>
          <div className={styles.cardSection}>
            <div className={styles.icon}></div>
            <div>APR - JUN<br />2024</div>
            <button className={styles.detailButton}>View in Detail</button>
          </div>
          <div className={styles.cardSection}>
            <div>
              <div className={styles.statsHeader}>PLAYED</div>
              <div className={styles.statsValue}>4</div>
            </div>
            <div>
              <div className={styles.statsHeader}>WON</div>
              <div className={styles.statsValue}>1</div>
            </div>
            <div>
              <div className={styles.statsHeader}>LOST</div>
              <div className={styles.statsValue}>3</div>
            </div>
          </div>
          <div className={styles.winningStreak}>WINNING STREAK</div>
          <div className={styles.streakIcons}>
            <div className={styles.win}>W</div>
            <div className={styles.loss}>L</div>
            <div className={styles.loss}>L</div>
            <div className={styles.loss}>L</div>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeaderPurple}>CONSOLIDATED STATISTICS</div>
        <div className={styles.cardBody}>
          <div className={styles.statsGrid}>
            <div className={styles.statsBox}>
              <div>MATCHES PLAYED</div>
              <div>5</div>
            </div>
            <div className={styles.statsBox}>
              <div>WON MATCHES</div>
              <div>2</div>
            </div>
            <div className={styles.statsBox}>
              <div>LOST MATCHES</div>
              <div>3</div>
            </div>
            <div className={styles.statsBox}>
              <div>NET RUNRATE</div>
              <div>-0.67</div>
            </div>
            <div className={styles.statsBox}>
              <div>AVG SCORE</div>
              <div>151</div>
            </div>
            <div className={styles.statsBox}>
              <div>HIGHEST SCORE</div>
              <div>179</div>
            </div>
          </div>
          <div className={styles.winningStreak}>40 Winning Streak</div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeaderGreen}>
          <div className={styles.headerLeft}>
            <div>Tue, 21-May</div>
            <div>SCOREBOOK</div>
          </div>
          <div>COMPLETED</div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.matchInfo}>
            <div className={styles.team}>
              <div className={styles.teamLogo}>PP</div>
              <div>Pitch Pirates</div>
            </div>
            <div className={styles.score}>181/7 (24.0/25 Ov)</div>
          </div>
          <div className={styles.vs}>vs</div>
          <div className={styles.matchInfo}>
            <div className={styles.team}>
              <div className={styles.teamLogo}>SC</div>
              <div>Shivoham CC</div>
            </div>
            <div className={styles.score}>179/6 (25.0/25 Ov)</div>
          </div>
          <div className={styles.location}>
            <div className={styles.locationIcon}></div>
            <div>22yards - kcg floodlights ground omr Chennai</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
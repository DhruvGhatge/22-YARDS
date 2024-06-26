
import styles from './Cards.module.css';

const Cards = ({SessionalData, ConslidatedStats, ScoreCard}) => {
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
              <div className={styles.statsValue}>{ SessionalData?SessionalData.matches : "-"}</div>
            </div>
            <div>
              <div className={styles.statsHeader}>WON</div>
              <div className={styles.statsValue}>{ SessionalData?SessionalData.won : "-"}</div>
            </div>
            <div>
              <div className={styles.statsHeader}>LOST</div>
              <div className={styles.statsValue}>{ SessionalData?SessionalData.lost : "-"}</div>
            </div>
          </div>
          <div className={styles.winningStreak}>WINNING STREAK</div>
          <div className={styles.streakIcons}>
            <div className={styles.win}>w</div>
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
              <div>{ ConslidatedStats?ConslidatedStats.matches : "-"}</div>
            </div>
            <div className={styles.statsBox}>
              <div>WON MATCHES</div>
              <div>{ ConslidatedStats?ConslidatedStats.won : "-"}</div>
            </div>
            <div className={styles.statsBox}>
              <div>LOST MATCHES</div>
              <div>{ ConslidatedStats?ConslidatedStats.lost : "-"}</div>
            </div>
            <div className={styles.statsBox}>
              <div>NET RUNRATE</div>
              <div>{ ConslidatedStats?ConslidatedStats.nrr : "-"}</div>
            </div>
            <div className={styles.statsBox}>
              <div>AVG SCORE</div>
              <div>{ ConslidatedStats?ConslidatedStats.averageScore : "-"}</div>
            </div>
            <div className={styles.statsBox}>
              <div>HIGHEST SCORE</div>highestScore
              <div>{ ConslidatedStats?ConslidatedStats.highestScore : "-"}</div>
            </div>
          </div>
          <div className={styles.winningStreak}>{ ConslidatedStats?ConslidatedStats.winPercent : "-"}</div>winPercent
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
              <div className={styles.teamLogo}>{ScoreCard?ScoreCard[0].AteamShortName: "-"}</div>

              <div>{ScoreCard?ScoreCard[0].AteamName: "-"}</div>
            </div>
            <div className={styles.score}>{ScoreCard?ScoreCard[0].matchScore[0].totalRun: "-"}/{ScoreCard?ScoreCard[0].matchScore[0].totalWicket: "-"}({ScoreCard?ScoreCard[0].matchScore[0].oversPlayed: "-"}/{ScoreCard?ScoreCard[0].matchScore[0].overs: "-"})</div>
          </div>
          <div className={styles.vs}>vs</div>
          <div className={styles.matchInfo}>
            <div className={styles.team}>
              <div className={styles.teamLogo}>{ScoreCard?ScoreCard[0].BteamShortName: "-"}</div>
              <div>{ScoreCard?ScoreCard[0].BteamName: "-"}</div>
            </div>
            <div className={styles.score}>{ScoreCard?ScoreCard[0].matchScore[1].totalRun: "-"}/{ScoreCard?ScoreCard[0].matchScore[1].totalWicket: "-"}({ScoreCard?ScoreCard[0].matchScore[1].oversPlayed: "-"}/{ScoreCard?ScoreCard[0].matchScore[1].overs: "-"})</div>
          </div>
          <div className={styles.location}>
            <div className={styles.locationIcon}></div>
            <div>{ScoreCard?ScoreCard[0].ground: "-"}</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
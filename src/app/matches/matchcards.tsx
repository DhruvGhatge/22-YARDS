import styles from './matchcard.module.css';

const Matchcards = () => {
  return (
<div className={styles.card}>
<div className={styles.cardHeaderGreen}>
  <div className={styles.headerLeft}>
    <div>Tue, 21-May</div>
    <div>SCOREBOOK</div>
  </div>
  <div>RESULT</div>
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

);
};

export default Matchcards;
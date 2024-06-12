
import styles from './StatsCard.module.css';

const StatsCard = ({ label, value }) => {
  return (
    <div className={styles.card}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default StatsCard;

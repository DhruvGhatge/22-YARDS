// Matchcards.js
import Matchcard from './MatchCard';
import styles from './matchcard.module.css';

const Matchcards = ({matchData}) => {
  

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.matchCardsContainer}>
        { matchData?(Object.entries(matchData).map((match, index) => (
          <Matchcard key={index} match={match} />
        ))):"-"}
      </div>
    </div>
  );
};

export default Matchcards;
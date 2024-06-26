// Matchcards.js
import Matchcard from './MatchCard';
import styles from './matchcard.module.css';

const Matchcards = ({matchData, teamMatchCard=false}: { matchData:any, teamMatchCard:boolean }

) => {

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.matchCardsContainer}>
        { matchData?(Object.entries(matchData).map((match:any, index) => (
          <Matchcard key={index} match={match} teamMatchCard={teamMatchCard} />
        ))):"-"}
      </div>
    </div>
  );
};

export default Matchcards;
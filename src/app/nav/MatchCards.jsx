// Matchcards.js
import Matchcard from './MatchCard';
import styles from './matchcard.module.css';

const Matchcards = () => {
  const matchData = [
    {
      date: 'Tue, 21-May',
      team1: { shortName: 'PP', name: 'Pitch Pirates', score: '181/7 (24.0/25 Ov)' },
      team2: { shortName: 'SC', name: 'Shivoham CC', score: '179/6 (25.0/25 Ov)' },
      location: '22yards - kcg floodlights ground omr Chennai'
    },

    {
      date: 'Tue, 21-May',
      team1: { shortName: 'PP', name: 'Pitch Pirates', score: '181/7 (24.0/25 Ov)' },
      team2: { shortName: 'SC', name: 'Shivoham CC', score: '179/6 (25.0/25 Ov)' },
      location: '22yards - kcg floodlights ground omr Chennai'
    },

    {
      date: 'Tue, 21-May',
      team1: { shortName: 'PP', name: 'Pitch Pirates', score: '181/7 (24.0/25 Ov)' },
      team2: { shortName: 'SC', name: 'Shivoham CC', score: '179/6 (25.0/25 Ov)' },
      location: '22yards - kcg floodlights ground omr Chennai'
    },

    {
      date: 'Tue, 21-May',
      team1: { shortName: 'PP', name: 'Pitch Pirates', score: '181/7 (24.0/25 Ov)' },
      team2: { shortName: 'SC', name: 'Shivoham CC', score: '179/6 (25.0/25 Ov)' },
      location: '22yards - kcg floodlights ground omr Chennai'
    },

    {
      date: 'Tue, 21-May',
      team1: { shortName: 'PP', name: 'Pitch Pirates', score: '181/7 (24.0/25 Ov)' },
      team2: { shortName: 'SC', name: 'Shivoham CC', score: '179/6 (25.0/25 Ov)' },
      location: '22yards - kcg floodlights ground omr Chennai'
    },

    
    // Add more match data objects here
  ];

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.matchCardsContainer}>
        {matchData.map((match, index) => (
          <Matchcard key={index} match={match} />
        ))}
      </div>
    </div>
  );
};

export default Matchcards;


import Image from 'next/image';
import styles from './Member.module.css';

const Member = () => {
  const people = [
    { name: 'Sivaguru', image: null },
    { name: 'Anand R', image: null },
    { name: 'Satheesh kumar. R', image: null },
    { name: 'Monish', image: null },
    { name: 'Vignesh', image: null },
    { name: 'Gokul', image: null },
    { name: 'Nanthu', image: null },
    { name: 'Yashwanth', image: '/yashwanth.png' }, // assuming you have an image for Yashwanth in public folder
    { name: 'Siva J', image: null },
    { name: 'Manoj N', image: null },
  ];

  return (
    <div className={styles.cardsContainer}>
    {people.map((person, index) => (
      <div className={styles.card} key={index}>
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            width={100}
            height={100}
            className={styles.cardImage}
          />
        ) : (
          <div className={styles.cardPlaceholder} />
        )}
        <div className={styles.cardName}>{person.name}</div>
      </div>
    ))}
  </div>
  
  );
};

export default Member;


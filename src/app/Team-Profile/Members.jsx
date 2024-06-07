

import Image from 'next/image';
import styles from './Member.module.css';


const Members = () => {
  const people = [
    { name: 'Sivaguru', image: '/image/default.jpg' },
    { name: 'Anand R', image: '/image/default.jpg' },
    { name: 'Satheesh kumar. R', image: '/image/default.jpg' },
    { name: 'Monish', image: '/image/default.jpg' },
    { name: 'Vignesh', image: '/image/default.jpg' },
    { name: 'Gokul', image: '/image/default.jpg' },
    { name: 'Nanthu', image: '/image/default.jpg' },
    { name: 'Yashwanth', image: '/image/default.jpg' }, // assuming you have an image for Yashwanth in public folder
    { name: 'Siva J', image: '/image/default.jpg' },
    { name: 'Manoj N', image: '/image/default.jpg' },
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

export default Members;


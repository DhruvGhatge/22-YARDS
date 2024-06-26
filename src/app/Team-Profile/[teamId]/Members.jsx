import Image from 'next/image';
import styles from './Member.module.css';

const Members = ({ membersData }) => {
  // console.log(membersData);

  return (
    <div className={styles.cardsContainer}>
      {membersData && membersData.length > 0 ? (
        membersData.map((person) => (
          <div className={styles.card} key={person._id}>
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
        ))
      ) : (
        <div>No members found</div>
      )}
    </div>
  );
};

export default Members;

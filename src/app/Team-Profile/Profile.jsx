


  import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.card}>
      <div className={styles.section}>
        <h2>About</h2>
        <p>Good team</p>
      </div>
      <div className={styles.section}>
        <h2>Location</h2>
        <p>Meenambakkam, Chennai</p>
      </div>
      <div className={styles.section}>
        <h2>Owner</h2>
        <p>Sathish</p>
      </div>
    </div>
  );
};

export default Profile;
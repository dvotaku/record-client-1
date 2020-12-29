import React from 'react';
import styles from '../LandingPage/LandingPage.module.css';
import Navbar from '../Navbar/Navbar';
import Cardlist from '../Card/Card_list';
const LandingPage = ({ isLogin, userData, postData }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Navbar isLogin={isLogin} />
        <Cardlist userData={userData} postData={postData} />
      </div>
    </div>
  );
};

export default LandingPage;
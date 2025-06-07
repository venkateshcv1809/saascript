import React from 'react';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome to the Next.js Application</h1>
            <p>This is the home page of your application.</p>
        </div>
    );
};

export default Home;
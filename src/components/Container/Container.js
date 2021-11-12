import React from 'react';
import styles from './Container.module.css'
import Controller from "./Controller/Controller";
import Contacts from "./Contacts/Contacts";

const Container = () => {
    return (
        <main className={styles.container}>
            <Controller/>
            <Contacts/>
        </main>
    );
};

export default Container;

import React from 'react';
import styles from './Contacts.module.css'
import Contact from "./Contact/Contact";
import {useSelector} from "react-redux";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Contacts = () => {
    let contacts = useSelector(state => state.contacts.contacts)
    return (
        <TransitionGroup className={styles.list} component='ul'>
            {contacts.map(contact => (
                <CSSTransition key={contact.id}
                               timeout={1000}
                               classNames={{
                                   enterActive: styles['item-enter-active'],
                                   enter: styles['item-enter'],
                                   exit: styles['item-exit'],
                                   exitActive: styles['item-exit-active'],
                               }}
                >
                    <li className={styles.el}
                        key={contact.id}><Contact id={contact.id} contact={contact}/></li>

                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default Contacts;

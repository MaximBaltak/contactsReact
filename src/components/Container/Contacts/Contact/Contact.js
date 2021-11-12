import React from 'react';
import styles from './Contacts.module.css'
import close from './../../../../img/delete.svg'
import {useDispatch} from "react-redux";
import actions from "../../../../store/Actions";

const Contact = ({contact, id}) => {
    let dispatch = useDispatch()
    return (
        <div className={styles.flex}>
            <div className={styles.avatar}
                 style={{backgroundColor: contact.avatar.background}}><span>{contact.avatar.symbol}</span></div>
            <div>
                <p className={styles.name}>{contact.name}</p>
                <p className={styles.text}>{contact.tel}</p>
            </div>
            <button onClick={() => dispatch(actions.DeleteCreater(id))} className={styles.close}>
                <svg className={styles.svg}>
                    <use xlinkHref={`${close}#delete`}/>
                </svg>
            </button>
        </div>
    );
};

export default Contact;

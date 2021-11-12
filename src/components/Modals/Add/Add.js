import React from 'react';
import styles from './Add.module.css'
import close from "../../../img/delete.svg";
import InputMask from 'react-input-mask'
import {useDispatch, useSelector} from "react-redux";
import actions from "../../../store/Actions";

const Add = () => {
    let dispatch = useDispatch()
    let name = useSelector(state => state.contacts.changeName)
    let tel = useSelector(state => state.contacts.changeTele)
    return (
        <>
            <button onClick={() => dispatch(actions.ToggleCreater())} className={styles.close}>
                <svg className={styles.svg}>
                    <use xlinkHref={`${close}#delete`}/>
                </svg>
            </button>
            <input className={styles.text} value={name}
                   onChange={e => dispatch(actions.ChangeNameCreater(e.target.value))} type="text"
                   placeholder="Введите имя"/>
            <InputMask mask="+9 (999) 999-99-99"
                       value={tel} onChange={e => dispatch(actions.ChangeTeleCreater(e.target.value))}
                       className={styles.text} placeholder="Введите номер телефона"/>
            <button onClick={() => dispatch(actions.AddCreater())} className={styles.add}>Добавить</button>
        </>
    );
};

export default Add;

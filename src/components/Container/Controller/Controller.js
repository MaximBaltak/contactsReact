import React from 'react';
import styles from './Controller.module.css'
import {useDispatch} from "react-redux";
import actions from "../../../store/Actions";

const Controller = () => {
    const dispatch = useDispatch()
    return (
        <div className={styles.container}>
            <button onClick={() => dispatch(actions.ClearCreater())}>Отчистить</button>
            <button onClick={() => dispatch(actions.ToggleCreater())}>Добавить</button>
        </div>
    );
};

export default Controller;

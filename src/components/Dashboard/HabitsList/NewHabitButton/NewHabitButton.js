import React from 'react';
import styles from './NewHabitButton.module.scss';

const NewHabitButton = ({ showNewHabitForm }) => (
    <button
        className={ styles.newHabitBtn }
        onClick={ showNewHabitForm }>
        Add a new habit
    </button>
)

export default NewHabitButton;
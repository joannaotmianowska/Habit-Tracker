import React from 'react';
import styles from './NoHabitsView.module.scss';
import noHabitsImg from '../../../../images/undraw_blank_canvas.svg';
import NewHabitButton from '../NewHabitButton/NewHabitButton';

const NoHabitsView = ({ showNewHabitForm }) => (
    <div className={ styles.noHabitsView }>
        <div className={ styles.infoContainer }>
            <p>You have no habit to work on now. Add new habits to start tracking them!</p>
            <NewHabitButton showNewHabitForm={ showNewHabitForm } />
            <img src={ noHabitsImg } alt="empty canvas illustration" />
        </div>
    </div>
)

export default NoHabitsView;
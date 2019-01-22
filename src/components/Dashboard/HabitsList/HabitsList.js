import React, { Component } from 'react';
import styles from './HabitsList.module.scss';
import AddHabitForm from '../AddHabitForm/AddHabitForm';
import SingleHabit from '../SingleHabit/SingleHabit';

class HabitsList extends Component {

    render() {
        return (
            <div className={ styles.list }>
                <AddHabitForm addHabit={ this.props.addHabit }/>
                <h3>Ongoing habits</h3>
                { Object.keys(this.props.habits).map(key =>
                    <SingleHabit
                        key={ key }
                        habitDetails={ this.props.habits[key] }
                        index={ key }
                        changeHabitProgress={ this.props.changeHabitProgress }
                    />
                ) }
            </div>
        )
    }
}

export default HabitsList;

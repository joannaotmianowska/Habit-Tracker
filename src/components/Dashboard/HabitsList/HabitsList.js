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
                { Object.keys(this.props.habits).length === 0
                    ? (<h4>Add habits you want to track using the form above.</h4>)
                    : ( Object.keys(this.props.habits).map(key =>
                        <SingleHabit
                            key={ key }
                            habitDetails={ this.props.habits[key] }
                            index={ key }
                            toggleDayAsMarked={ this.props.toggleDayAsMarked }
                            deleteHabit={ this.props.deleteHabit }
                        />
                    ))
                }
            </div>
        )
    }
}

export default HabitsList;

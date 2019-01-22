import React, { Component } from 'react';
import styles from './SingleHabit.module.scss';
import SingleDay from './SingleDay/SingleDay';

class SingleHabit extends Component {

    constructor(props) {
        super(props);

        this.changeProgress = this.changeProgress.bind(this);
    }

    daysArrayForHabit(days) {
        let array = [];

        for(let i = 1; i <= days; i++) {
            array.push(i);
        }

        return array;
    }

    changeProgress(direction) {
        this.props.changeHabitProgress(this.props.index, direction);
    }

    render() {
        console.log('completed', this.props.habitDetails.completed)
        return (
            <div>
                <h5>Habit: { this.props.habitDetails.name }</h5>
                <div className={ styles.daysArea }>
                    { this.daysArrayForHabit(this.props.habitDetails.duration).map(el =>
                        <SingleDay
                            key={ el }
                            changeProgress={ this.changeProgress }/>
                    )}
                </div>
                <h6 className={ this.props.habitDetails.completed ? styles.shown : styles.hidden  }>Completed!</h6>
            </div>
        )
    }
}

export default SingleHabit;

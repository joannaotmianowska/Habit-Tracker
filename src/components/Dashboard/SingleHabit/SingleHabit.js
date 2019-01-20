import React, { Component } from 'react';
import styles from './SingleHabit.module.scss';

class SingleHabit extends Component {

    daysArrayForHabit(days) {
        let array = [];

        for(let i = 1; i <= days; i++) {
            array.push(i);
        }

        return array;
    }

    render() {
        return (
            <div>
                <h5>Habit: { this.props.habitDetails.name }</h5>
                <div className={ styles.daysArea }>
                    { this.daysArrayForHabit(this.props.habitDetails.duration).map(el =>
                        <div key={ el } className={ styles.circle }/>
                    )}
                </div>
            </div>
        )
    }
}

export default SingleHabit;

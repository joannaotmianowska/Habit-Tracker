import React, { Component } from 'react';
import styles from './SingleHabit.module.scss';
import SingleDay from './SingleDay/SingleDay';

class SingleHabit extends Component {

    render() {
        return (
            <div>
                <h5>Habit: { this.props.habitDetails.name }</h5>
                <div className={ styles.daysArea }>
                    { this.props.habitDetails.days.map(el =>
                        <SingleDay
                            key={ el.dayNo }
                            habitKey={ this.props.index }
                            toggleDayAsMarked={ this.props.toggleDayAsMarked }
                            { ...el }
                        />
                    )}
                </div>
                <h6 className={ this.props.habitDetails.completed ? styles.shown : styles.hidden  }>Completed!</h6>
            </div>
        )
    }
}

export default SingleHabit;

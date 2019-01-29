import React, { Component } from 'react';
import styles from './SingleHabit.module.scss';
import SingleDay from './SingleDay/SingleDay';

class SingleHabit extends Component {


    render() {
        const { name, duration, progress, days, completed } = this.props.habitDetails;
        
        return (
            <div>
                <h5>Habit: { name }</h5>
                <div className={ styles.progressArea }>{ progress }/{ duration }</div>
                <div className={ styles.daysArea }>
                    { days.map(el =>
                        <SingleDay
                            key={ el.dayNo }
                            habitKey={ this.props.index }
                            toggleDayAsMarked={ this.props.toggleDayAsMarked }
                            { ...el }
                        />
                    )}
                </div>
                <h6 className={ completed ? styles.shown : styles.hidden  }>Completed!</h6>
            </div>
        )
    }
}

export default SingleHabit;

import React, { Component } from 'react';
import styles from './SingleHabit.module.scss';
import SingleDay from './SingleDay/SingleDay';

class SingleHabit extends Component {

    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
    }

    delete() {
        this.props.deleteHabit(this.props.index);
    }

    render() {
        const { name, duration, progress, days, completed } = this.props.habitDetails;

        return (
            <div className={ styles.singleHabit }>
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
                <button onClick={ this.delete }>Delete</button>
                <h6 className={ completed ? styles.shown : styles.hidden  }>Completed!</h6>
            </div>
        )
    }
}

export default SingleHabit;

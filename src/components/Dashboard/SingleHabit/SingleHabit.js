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
        const { name, duration, progress, days, startingDate } = this.props.habitDetails;

        return (
            <div className={ styles.singleHabit }>
                <div className={ styles.habitHeader }>
                    <div className={ styles.mainInfo }>
                        <h5>{ name }</h5>
                        <button onClick={ this.delete }>delete</button>
                    </div>
                    { startingDate && <div className={ styles.startingDate }>
                        <h5>
                            <span className={ styles.startLabel }>Starting date: </span>
                            { startingDate }
                        </h5>
                    </div> }
                </div>
                <div className={ styles.progressArea }>
                    <div className={ styles.daysArea }>
                        { days !== 0 && days.map(el =>
                            <SingleDay
                                key={ el.dayNo }
                                habitKey={ this.props.index }
                                toggleDayAsMarked={ this.props.toggleDayAsMarked }
                                { ...el }
                            />
                        )}
                    </div>
                    <div>
                        { startingDate && <div></div>}
                    </div>
                    <div className={ styles.progress }>
                        <div>
                            <span className={ styles.progressMark }>{ progress }</span>
                            <span>/{ duration }</span>
                        </div>
                        <div className={ styles.days }>days</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleHabit;

import React, { Component } from 'react';
import styles from './SingleHabit.module.scss';
import SingleDay from './SingleDay/SingleDay';
import Modal from '../../Modals/Modal';

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
                <div className={ styles.habitHeader }>
                    <h5>{ name }</h5>
                    <button onClick={ this.delete }>delete</button>
                </div>
                <div className={ styles.progressArea }>
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
                    <div className={ styles.progress }>
                        <div>
                            <span className={ styles.progressMark }>{ progress }</span>
                            <span>/{ duration }</span>
                        </div>
                        <div className={ styles.days }>days</div>
                    </div>
                </div>
                {/* { completed && <Modal>abc</Modal>} */}
                {/* <h6 className={ completed ? styles.shown : styles.hidden  }>Completed!</h6> */}
            </div>
        )
    }
}

export default SingleHabit;

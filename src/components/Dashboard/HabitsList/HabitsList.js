import React, { Component } from 'react';
import styles from './HabitsList.module.scss';
import SingleHabit from '../SingleHabit/SingleHabit';
import AddFormHabit from '../AddHabitForm/AddHabitForm';
import Modal from '../../Modals/Modal';

class HabitsList extends Component {

    render() {
        return (
            <div className={ styles.dashboard }>
                <div className={ styles.listHeader }>
                    <h3 className={ styles.header }>Ongoing habits</h3>
                    <button
                        className={ styles.newHabit }
                        onClick={ this.props.showModal }>
                        <i className="fas fa-plus"></i>Add new habit
                    </button>
                </div>
                <div className={ styles.list }>
                    { this.props.isModalShown &&
                        <Modal>
                            <AddFormHabit addHabit={ this.props.addHabit } closeModal={ this.props.closeModal }/>
                        </Modal> }
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
            </div>

        )
    }
}

export default HabitsList;
